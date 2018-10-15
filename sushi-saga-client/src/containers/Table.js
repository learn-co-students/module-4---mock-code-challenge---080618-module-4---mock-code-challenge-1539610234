import React, { Fragment } from 'react'

const Table = ({balance,alreadyAteId}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(alreadyAteId)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
