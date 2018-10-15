import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.selectedSushi.length == 0) {
      return <p>Loading...</p>
    }
    const currentSelection = this.props.selectedSushi.map((data) => {
      return <Sushi key={data.id} data={data} handlePurchase={this.props.handlePurchase} wallet={this.props.wallet} />
    })
    return (
      <Fragment>
        <div className="belt">

          {currentSelection}
          <MoreButton randomize={this.props.randomize} />
        </div>
      </Fragment>
    )
  }
}









export default SushiContainer
