import React, { Fragment } from 'react'

const Sushi = (props) => {
  const checkIfEaten = () =>{
    return props.eaten.includes(props.sushi) ? true : false
  }
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.handleSushiClick(props.sushi,checkIfEaten())}>
        {
          checkIfEaten() ? null : <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
