import React, { Component } from 'react'
import Rotate from 'react-reveal/Rotate'

const numberOfElement = 2

export class ItemAnimation extends Component {
  render () {
    const randomVal = Math.floor(Math.random() * numberOfElement)
    switch (randomVal) {
      case 0:
        return <Rotate top left>{this.props.children}</Rotate>
      case 1:
        return <Rotate top right>{this.props.children}</Rotate>
      default:
        return <div>{this.props.children}</div>
    }
  }
}

export default ItemAnimation
