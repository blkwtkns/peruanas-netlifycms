import React from 'react'
// import withRouteData from 'react-static'
import EngHistory from './EngHistory'
import EspHistory from './EspHistory'
import Separator from '../SepComponent'

// export default withRouteData(() => (
export default props => (
  <section className="mainSection">
    <div className="history__container">
      <EngHistory />
      <Separator />
      <EspHistory />
    </div>
  </section>
)
