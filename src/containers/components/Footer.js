import React, { Component } from 'react'
import { ContactLink } from './ContactLink'

export class Footer extends Component {
  render () {
    return (
      <div>
        <ContactLink text="Facebook" url="https://www.facebook.com/thitiwat.thongbor" />
        <ContactLink text="Github" url="https://www.github.com/thitgorn" />
        <ContactLink text="Twitter" url="https://twitter.com/GuyZivesO" />
        <ContactLink text="Email" url="mailto:thitiwat.tho1@ku.th" />
      </div>
    )
  }
}

export default Footer
