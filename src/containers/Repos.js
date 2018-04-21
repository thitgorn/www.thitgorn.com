import React, { Component } from 'react'
import Axios from 'axios'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Item } from './components/Item'
import { sortController } from './utils/sortRepos'
import { Loader } from './components/Loader'

export class Repo extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      sortBy: 'Default',
      repos: [],
      loading: false,
      buttonLoading: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.setButtonLoading = this.setButtonLoading.bind(this)
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  async componentWillMount () {
    let page = 1
    this.setState({ loading: true })
    const id = await setInterval(() => {
      try {
        Axios.get(`https://api.github.com/users/thitgorn/repos?page=${page}`)
          .then(response => {
            const data = response.data
            if (data.length <= 0) {
              this.handleClick('Default')
              this.setState({ loading: false })
              clearInterval(id)
            } else {
              this.setState({ repos: [...this.state.repos, ...data] })
            }
          })
          .catch(error => {
            console.log(error)
          })
      } finally {
        page+=1
      }
    }, 500)
  }

  setButtonLoading (bool) {
    this.setState({ buttonLoading: bool })
  }

  handleClick (clicked) {
    console.log(clicked)
    this.setState({ sortBy: clicked })
    sortController(this.state.repos, clicked, this.setButtonLoading)
  }

  render () {
    if (this.state.loading && process.env.NODE_ENV !== 'development') {
      return <Loader />
    }

    let repos = this.state.repos

    repos = repos.filter(repo => !repo.fork)

    const items = repos.map((repo, id) => <Item key={id} repo={repo} />)

    return (
      <div className="text-center">
        <h3 className="text-header">Repositories (works)</h3>

        <hr style={{ width: '70%' }} />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <h2>Sort by : </h2>
          <div className="m-1">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {this.state.sortBy}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.handleClick('Default')}>Default</DropdownItem>
                <DropdownItem onClick={() => this.handleClick('Star')}>Star</DropdownItem>
                <DropdownItem onClick={() => this.handleClick('Commit')}>Commit</DropdownItem>
                <DropdownItem onClick={() => this.handleClick('Recent Commit')}>Recent Commit</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          { this.state.buttonLoading ?
            <div className="ld-ext-right running">
              <div className="ld ld-ring ld-spin" />
            </div>
            :
            null
          }
        </div>
        {items}
      </div>
    )
  }
}

export default Repo
