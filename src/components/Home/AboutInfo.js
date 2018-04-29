import React from 'react'
import Gallery from '../ImageCarousel'

export default ({images}) => (
  <div className="About">
    <div className="jumbotron">
      <h1 className="mainAbout">
        Peruvian Events in Los Angeles Promoting Music and Dances from Peru
      </h1>
      <p>
        Feel Transported to the High Mountains of Peru With Ancient Rhythms of
        the Andes, Where You Will Enjoy Music and Dances Presented By
      </p>
      <h3 className="raicesAbout">RAICES PERUANAS</h3>
      <p>
        Presenting Afro-Peruvian dances and dances from the Inca’s land Exotic
        and colorful dances from the Andes, coast, and the jungle.
      </p>
      <p>
        <em>Centro Cultural Raíces Peruanas de Los Angeles California</em> is a
        non-profit cultural institution founded in Los Angeles, California in
        1989. Its membership is comprised of students and young professionals
        whose main goal is to continue developing and disseminating the arts
        through music and dance. Raíces Peruanas is formed of a group of over 20
        members, some native of Peru’s different regions and others USA born -
        Peruvian descent, thus forming unique groups of true messengers and
        disseminators of their own ethnic background, making Raíces Peruanas a
        rich blend of Peruvian culture and tradition.
      </p>
    </div>
    <Gallery galleryClass={'homeGallery'} images={images} />
    <div className="jumbotron">
      <p>
        Raíces Peruanas is an objectively-geared effort and contribution to the
        strengthening of our identity as Peruvians living in a foreign, far-away
        land. Raíces Peruanas is based in preserving tradition and in the
        cultural millennia legacy that continues living on and constitutes our{' '}
        <span className="raicesAbout"><em>TRUE CULTURE</em></span>.
      </p>
      <p>
        Raíces Peruanas is currently formed by a cast of renowned musicians and
        dancers, masters of unique and diverse music, dance, and movement which
        during each of their performances, strike the audience with a new sense
        of beauty and the realization of a new reality never before seen.
      </p>
    </div>
  </div>
)
