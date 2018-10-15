import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    page: 1,
    eatenSushi: [],
    money: 150
  }

  componentDidMount(){
    fetch(API).then(res => res.json()).then( sushiObjs => {
      this.setState({
        sushi: [...sushiObjs]
      })
    })
  }

  displaySushi = () => {
    const sushiToDisplay = []
    for(let i = (this.state.page * 4) - 4 ; i < (this.state.page * 4); i++){
      sushiToDisplay.push(this.state.sushi[i])
    }
    return sushiToDisplay
  }

  moreSushi = () => {
    if(this.state.page < 25){
      this.setState({
        page: this.state.page + 1
      })
    } else {
      this.setState({
        page: 1
      })
    }
  }

  handleEaten = (sushiId, price) => {
    if(price <= this.state.money){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushiId],
        money: this.state.money - price
      })
    }
  }

  addMoney = () => {
    this.setState({
      money: this.state.money + 100
    })
  }

  render() {
    return (
      <div className="app">
        { this.state.sushi !== [] ? <SushiContainer sushi={this.displaySushi()} moreSushi={this.moreSushi} handleEaten={this.handleEaten} eatenSushi={this.state.eatenSushi} /> : null }
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
        <button onClick={this.addMoney}>Add Funds</button>
      </div>
    );
  }
}

export default App;
