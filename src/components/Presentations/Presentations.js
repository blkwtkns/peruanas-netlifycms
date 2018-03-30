import React from 'react'
import Event from './Event'
import Separator from '../SepComponent'
import { withRouteData } from 'react-static'

// export default (props) => {
//   return (
//     <section className="presentationsSection">
//       <div className="container">
//
//         <PageHeader> Upcoming Presentations </PageHeader>
//         {
//           !info.upcomingPerformances.length ? [<Event info={info.default[0]} key={1}/>] :
//           info.upcomingPerformances.map((el, idx, arr) => {
//             return idx === arr.length - 1 ? <Event info={el} key={idx} /> : [<Event info={el} key={idx} />, <Separator />];
//           })
//         }
//
//         <PageHeader> Past Presentations </PageHeader>
//         {
//           info.pastPerformances.map((el, idx, arr) => {
//             return idx === arr.length - 1 ? <Event info={el} key={idx} /> : [<Event info={el} key={idx} />, <Separator />];
//           })
//         }
//       </div>
//     </section>
//   );
// }

// { presentations.map(event => ( <Event key={event.data.slug} {...event.data} /> )) }

export default withRouteData(({ presentations }) => (
  <section className="presentationsSection">
    <div className="container">
      <h1 className="pres-header">Presentations</h1>
      <ul>
        {presentations.map((event, id) => (
          <li key={id}>
            {/*<Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>*/}
            <Event {...event.data} />
            <Separator />
          </li>
        ))}
      </ul>
    </div>
  </section>
))
