import fs from 'fs'
import klaw from 'klaw'
import path from 'path'
import matter from 'gray-matter'
import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import ExtractCssChunks from 'extract-css-chunks-webpack-plugin'
import React from 'react'

function getPosts(type) {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      const target = `./src/matter/${type}`
      if (fs.existsSync(target)) {
        klaw(target)
          .on('data', item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === '.md') {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, 'utf8')
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data)
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
              // Remove unused key //
              delete dataObj.orig
              // Push object into items array //
              items.push(dataObj)
            }
          })
          .on('error', e => {
            console.log(e)
          })
          .on('end', () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items)
          })
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items)
      }
    })
  return getFiles()
}

export default {
  preact: true,
  siteRoot: 'https://www.raicesperuanas.com',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Raices Peruanas, Promoting Music and Dances from Peru, Los Angeles, CA</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: () => ({
    title: 'Raices Peruanas',
  }),
  getRoutes: async () => {
    const presentations = await getPosts('presentations')
    const aboutImages = await getPosts('aboutImages')
    const home = await getPosts('home')
    const team = await getPosts('team')
    const dances = await getPosts('dances')
    const history = await getPosts('history')
    const about = await getPosts('about')
    return [
      {
        path: '/',
        component: 'src/components/Home/Home',
        getData: () => ({
          home
        }),
      },
      {
        path: '/about',
        component: 'src/components/About/About',
        getData: () => ({
          aboutImages,
          about
        }),
      },
      {
        path: '/history',
        component: 'src/components/History/History',
        getData: () => ({
          history,
        }),
      },
      {
        path: '/team',
        component: 'src/components/Team/Team',
        getData: () => ({
          team,
        }),
      },
      {
        path: '/dances',
        component: 'src/components/Dances/Dances',
        getData: () => ({
          dances,
        }),
        children: dances.map(dance => ({
          path: `/dance/${dance.data.slug}`,
          component: 'src/components/Dances/Dance',
          getData: () => ({
            dance,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/components/Contact/Contact',
      },
      {
        path: '/presentations',
        component: 'src/components/Presentations/Presentations',
        getData: () => ({
          presentations,
        }),
      },
      {
        is404: true,
        component: 'src/components/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.plugins.push(
      new ExtractTextPlugin({
        filename: './[name].css'
      })
    );
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use:
            stage === 'dev'
            ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            : ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: false,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: { includePaths: ['src/'] },
                },
              ]
            }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
