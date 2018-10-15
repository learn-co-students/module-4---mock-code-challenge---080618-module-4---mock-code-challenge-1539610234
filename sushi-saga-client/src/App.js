import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    nextFourSushis: [],
    sushiIndex:4,
    cash: 100
  }

  componentDidMount(){
    fetch(API).then(res => res.json())
      .then(data => this.setState({
        sushis:data,
        nextFourSushis:data.slice(0,4)
      }))
  }

  handleSushiClick = (event) => {
    debugger
  }

  handleMoreClick = () =>{
    this.setState({
      nextFourSushis:this.state.sushis.slice(this.state.sushiIndex,this.state.sushiIndex+4),
      sushiIndex:this.state.sushiIndex+4
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.nextFourSushis} handleSushiClick={this.handleSushiClick} handleMoreClick={this.handleMoreClick}/>
        <Table cash={this.state.cash} selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
