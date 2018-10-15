import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }
  handleClick = (event) => {
    if (this.props.data.price <= this.props.wallet) {
      if (!this.state.isClicked) {
        this.props.handlePurchase(this.props)
      }
      this.setState({
        isClicked: true
      })
    }


  }
  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.handleClick}>
          {this.state.isClicked ? null : <img src={this.props.data.img_url} width="100%" /> }

        </div>
        <h4 className="sushi-details">
          {this.props.data.name} - ${this.props.data.price}
        </h4>
      </div>
    )
  }
}


export default Sushi
