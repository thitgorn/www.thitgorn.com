import React, { Component } from 'react'

export class ContactLink extends Component {
  render () {
    return (
      <fragment className="m-4">
        <a href={this.props.url} className="text-header">{this.props.text}</a>
      </fragment>
    )
  }
}

export default ContactLink
