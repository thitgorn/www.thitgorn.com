import React from 'react'
import { LinkTo } from './components/LinkTo'
import { Footer } from './components/Footer'

export class Home extends React.Component {
  render () {
    return (
      <div style={{
        position: 'absolute', top: '0%', left: '0%', width: '100%', height: '100vh',
        }}>
        <div align="center" style={{
          width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          }}>
          <h1 className="display-3 text-header">THITGORN.COM</h1>
          <LinkTo to="https://ziveso.github.io" text="Profile website" hover="https://ziveso.github.io" />
          <LinkTo to="/repos" text="Repositories / Works" hover="My works" />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home

