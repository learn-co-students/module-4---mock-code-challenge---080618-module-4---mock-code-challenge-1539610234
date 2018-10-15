import React from 'react'

const Wallet = ({handleSubmitMoney,handleRechargeChange,rechargeAmount}) => {

  return (
    <div className="wallet">
      <form onSubmit={handleSubmitMoney}>
        <label>
          Money:
          <input type="text" value={rechargeAmount} onChange={handleRechargeChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
}

export default Wallet
