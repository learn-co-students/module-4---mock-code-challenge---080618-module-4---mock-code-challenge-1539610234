import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './containers/Wallet';
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis:[],
    startIndex:0,
    alreadyAteId:[],
    balance:100,
    rechargeAmount:''
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(sushis=>this.setState({sushis}))
  }

  handleEat=(id,price)=>{
    if (this.state.balance-price>=0) {
      this.setState(prev=>({alreadyAteId:[...prev.alreadyAteId,id],
        balance:prev.balance-price}))
    }
  }

  handleMore=()=>{
    const amount=this.state.sushis.length
    this.setState(prev=>({startIndex:(prev.startIndex+4)%amount}))
  }

  handleRechargeChange=(e)=>{
    this.setState({rechargeAmount:e.target.value})
  }

  handleSubmitMoney=(e)=>{
    e.preventDefault()
    const amount=parseInt(this.state.rechargeAmount,10)
    this.setState(prev=>({balance:prev.balance+amount,
     rechargeAmount:''}))
  }

  render() {
    const start=this.state.startIndex
    const end=this.state.startIndex+4
    const sushiPage=this.state.sushis.slice(start,end)
    return (
      <div className="app">
        <Wallet handleRechargeChange={this.handleRechargeChange}
          handleSubmitMoney={this.handleSubmitMoney}
          rechargeAmount={this.state.rechargeAmount} />

        <SushiContainer  sushis={sushiPage} handleEat={this.handleEat}
         alreadyAteId={this.state.alreadyAteId}
         handleMore={this.handleMore}/>
        <Table balance={this.state.balance} alreadyAteId={this.state.alreadyAteId}/>
      </div>
    );
  }
}

export default App;
