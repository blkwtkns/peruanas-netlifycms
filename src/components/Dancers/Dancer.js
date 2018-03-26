import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
//

export default withRouteData(({ dancer }) => (
  <div className="dancer">
    <Link to="/dancers/">{'<'} Back</Link>
    <br />
    <h3>{dancer.data.title}</h3>
    <img className="image" src={dancer.data.thumbnail} alt="" />
    <Markdown source={dancer.content} escapeHtml={false} />
  </div>
))
