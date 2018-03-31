import React from 'react'
import Event from './Event'
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


export default withRouteData(({ presentations }) => (
  <section className="presentationsSection">
    <div className="container">
      <h1 className="pres-header">Presentations</h1>
      <ul>
        {presentations.map((event, id) => (
          <li key={id} className="presentation">
            <Event {...event.data} />
          </li>
        ))}
      </ul>
    </div>
  </section>
))
