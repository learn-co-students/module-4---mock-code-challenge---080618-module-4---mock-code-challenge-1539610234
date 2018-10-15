import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sushi : [],
      selectedSushi: [],
      emptyPlates: [],
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      let randomFour = []
      for (let i = 0; i < 4; i++) {
        randomFour.push(data[Math.floor(Math.random()*100)])
      }


      this.setState({
        sushi: data,
        selectedSushi: randomFour
      })
    })

  }
  handlePurchase = (sushiData) => {
    this.setState({
      emptyPlates: [
        ...this.state.emptyPlates,
        sushiData.data
      ],
      wallet: this.state.wallet - sushiData.data.price
    },() => console.log(this.state.emptyPlates))
  }

  randomize = (event) => {
    let randomFour = []
    let usedKeys = []
    while (randomFour.length < 5) {
      const randKey = Math.floor(Math.random()*100)
      if (!usedKeys.includes(randKey)) {
        randomFour.push(this.state.sushi[randKey])
        usedKeys.push(randKey)
      }

    }
    this.setState({
      selectedSushi: randomFour.slice(0,4)
    })
    // I added the slice random 4 as a safeguard against multiple sushi rendering
    // on the screen
  }

  render() {
    return (
      <div className="app">
        <SushiContainer selectedSushi={this.state.selectedSushi} randomize={this.randomize} handlePurchase={this.handlePurchase} wallet={this.state.wallet} />
        <Table wallet={this.state.wallet} emptyPlates={this.state.emptyPlates} />
      </div>
    );
  }
}

export default App;
