import React from 'react'

export default props => (
  <div className="jumbotron mainHistory engHistory">
    <h1 className="historyMainTitle"> History </h1>
    <h1 className="historyTitleEng">{ props.histTitle }</h1>
    <h6 className="historyCaption">(Spanish Version at the bottom)</h6>
    { props.histContent }
  </div>
)
