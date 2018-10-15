import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let count = 0
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map( sushiObj => (
            sushiObj ?
              props.eatenSushi.includes(sushiObj.id) ?
              <Sushi key={ ++count } {...sushiObj} handleEaten={props.handleEaten} eaten={true} /> : <Sushi key={ ++count } {...sushiObj} handleEaten={props.handleEaten} eaten={false} />
            : null
            ))
        }
        <MoreButton handleSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
