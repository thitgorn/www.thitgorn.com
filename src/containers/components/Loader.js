import React, { Component } from 'react'
import './Loader.css'

export class Loader extends Component {
  render () {
    return (
      <div className="centered">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

export default Loader
