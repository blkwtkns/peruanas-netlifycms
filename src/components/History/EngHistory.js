import React from 'react'

export default props => (
  <div className="jumbotron mainHistory engHistory">
    <h1 className="historyMainTitle"> History </h1>
    <h1 className="historyTitleEng">{ props.histTitle }</h1>

    {props.image && props.image.length && <img className="history__image" src={props.image} alt="" />}
    { props.histContent }
  </div>
)
