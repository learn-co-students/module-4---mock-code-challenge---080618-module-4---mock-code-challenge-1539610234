import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    sushiIndex:0,
    cash: 100
  }

  componentDidMount(){
    fetch(API).then(res => res.json())
      .then(data => this.setState({
        sushis:data
      }))
  }

  handleSushiClick = (sushi) => {
    if(!this.state.eaten.includes(sushi) && this.state.cash-sushi.price >= 0){
      this.setState({
        eaten: [...this.state.eaten,sushi],
        cash: this.state.cash - sushi.price
      })
    }
  }

  handleMoreClick = () =>{
    if(this.state.sushiIndex===96){
      this.setState({
        sushiIndex: 0
      })
    }else{
      this.setState({
        sushiIndex: this.state.sushiIndex+4
      })
    }
  }

  // handleSushiWallet = (e) =>{
  //   e.preventDefault();
  //   this.setState({
  //     cash: this.state.cash + parseInt(e.target.amount.value)
  //   })
  // }

  addWallet = (amount) => {
    this.setState({
      cash: this.state.cash + amount
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.sushiIndex,this.state.sushiIndex+4)} eaten={this.state.eaten} handleSushiClick={this.handleSushiClick} handleMoreClick={this.handleMoreClick}/>
        <Table cash={this.state.cash} eaten={this.state.eaten}/>
        <SushiWallet addWallet={this.addWallet}/>
      </div>
    );
  }
}

export default App;
