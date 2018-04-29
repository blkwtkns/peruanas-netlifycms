import React from 'react'

export default props => (
  <div className="jumbotron mainHistory espHistory">
    <h1 className="historyMainTitle"> Historia </h1>
    <h1 className="historyTitleEsp">{ props.histTitle }</h1>
    { props.histContent }
  </div>
)
