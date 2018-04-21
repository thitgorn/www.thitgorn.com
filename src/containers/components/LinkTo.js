import React, { Component } from 'react'
import HeadShake from 'react-reveal/HeadShake'
import { Link } from 'react-static'

export class LinkTo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHover: false,
    }
  }

  render () {
    return (
      <div style={{ textAlign: 'center', width: '70%', margin: 'auto' }}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        >
        <h3>
          <u>
            {this.props.to.includes('https://')?
              <a href={this.props.to} style={{ textDecoration: 'none' }}>
                { this.state.isHover ? <HeadShake><div style={{ color: '#e582ba' }}>{this.props.hover}</div></HeadShake> : null}
                { !this.state.isHover ? <div>{this.props.text}</div>:null}
              </a>:
              <Link to={this.props.to} style={{ textDecoration: 'none' }}>
                { this.state.isHover ? <HeadShake><div style={{ color: '#e582ba' }}>{this.props.hover}</div></HeadShake> : null}
                { !this.state.isHover ? <div>{this.props.text}</div> : null}
              </Link>
            }
          </u>
        </h3>
        <hr />
      </div>
    )
  }
}

export default LinkTo
