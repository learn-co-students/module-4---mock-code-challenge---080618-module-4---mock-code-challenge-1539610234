import React from 'react'

const Sushi = ({id,img_url,name,price,handleEat,alreadyAteId}) => {
  const alreadyAte=alreadyAteId.indexOf(id)!==-1
  return (
    <div className="sushi">
      <div className="plate"
           onClick={()=>handleEat(id,price)}>
        {alreadyAte? null:<img src={img_url} width="100%" alt='sushi' />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
