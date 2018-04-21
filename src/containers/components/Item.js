import React, { Component } from 'react'
import { ItemAnimation } from './ItemAnimation'

export class Item extends Component {
  render () {
    const repo = this.props.repo
    return (
      <div align="center">
        <ItemAnimation>
          <h1>
            <a href={repo.html_url} style={{ color: '#EF8354', textShadow: '4px 4px #0F7173' }}>{repo.name}</a>
          </h1>
        </ItemAnimation>
      </div>
    )
  }
}

export default Item
