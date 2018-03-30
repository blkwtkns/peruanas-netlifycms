import React from 'react'
import EngHistory from './EngHistory'
import EspHistory from './EspHistory'
import Separator from '../SepComponent'
// import withRouteData from 'react-static'

// export default withRouteData(() => (
export default props => (
  <section className="historySection">
    <EngHistory />
    <Separator />
    <Separator />
    <EspHistory />
  </section>
)
