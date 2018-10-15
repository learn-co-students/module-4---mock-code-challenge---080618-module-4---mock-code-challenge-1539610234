import React, { Fragment } from 'react'

const SushiWallet = (props) => {
  return (
    <div className="wallet">
    <br/>
    <h3><strong>SushiWallet</strong></h3>
      <button onClick={() => props.addWallet(10)}>Add $10</button><br/>
      <button onClick={() => props.addWallet(20)}>Add $20</button><br/>
      <button onClick={() => props.addWallet(50)}>Add $50</button><br/>
      <button onClick={() => props.addWallet(100)}>Add $100</button><br/>
    </div>
  )
}

export default SushiWallet
