import React from 'react'
import { Router } from 'react-static'
import { TransitionMotion, spring } from 'react-motion'
import Routes from 'react-static-routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import './loading-btn.css'
import './loading.css'

const leavingSpringConfig = { stiffness: 60, damping: 15 }

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { mouse: [], now: 't' }
  }

  componentDidMount () {
    if (process.env.NODE_ENV!=='development') {
      if (!window.location.host.startsWith('www')) {
        window.location = (window.location.protocol + '//' + 'www.' + window.location.host + window.location.pathname)
      }
    }
  }

  handleMouseMove = ({ pageX, pageY }) => {
    this.setState({
      mouse: [pageX - 25, pageY - 25],
      now: 't'.concat(Date.now()),
    })
  }

  handleTouchMove = e => {
    e.preventDefault()
    this.handleMouseMove(e.touches[0])
  }

  willLeave = styleCell => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    }
  }

  render () {
    const { mouse: [mouseX, mouseY], now } = this.state
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      },
    }]
    return (
      <Router>
        <TransitionMotion willLeave={this.willLeave} styles={styles}>
          {
            circles =>
              (
                <div
                  onMouseMove={this.handleMouseMove}
                  onTouchMove={this.handleTouchMove}
                  className="demo7">
                  {
                  circles.map((
                 {
                    key, style: {
                      opacity, scale, x, y,
                    },
                }) =>
                  (<div
                    key={key}
                    className="demo7-ball"
                    style={{
                      opacity: opacity,
                      scale: scale,
                      transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                      WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                    }} />
                ))
              }
                  <Routes />
                </div>
              )
          }
        </TransitionMotion>
      </Router>
    )
  }
}
