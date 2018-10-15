import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushis=props.sushis.map((sushi,idx)=><Sushi {...sushi}
    handleEat={props.handleEat}  key={idx} alreadyAteId={props.alreadyAteId}
   />)
  return (
    <Fragment>
      <div className="belt">
         {sushis}
        <MoreButton handleMore={props.handleMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
