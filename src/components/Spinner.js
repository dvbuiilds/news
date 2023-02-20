import React, { Component } from 'react'
import spin from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5 py-5">
        <img src={spin} alt='...'/>
      </div>
    )
  }
}

export default Spinner;