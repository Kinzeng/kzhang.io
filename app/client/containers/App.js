import React from 'react'
import Toolbar from '../components/toolbar'

const appProps = {
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Garamond'
  }
}

const headerProps = {
  style: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    position: 'fixed',
    backgroundColor: 'lightgray'
  }
}

const imageProps = {
  style: {
    height: '100px',
    width: '100px',
    borderRadius: '100%'
  },
  src: 'https://lh3.googleusercontent.com/-HCpqSkPmnNY/AAAAAAAAAAI/AAAAAAAAAAo/Z69759Z5s5s/s160-c-k-no/photo.jpg'
}

export default class App extends React.Component {
  render () {
    return (
      <div {...appProps}>
        <div {...headerProps}>
          <img {...imageProps} />
          <Toolbar />
        </div>
        <div style={{marginTop: '118px'}}>{this.props.children}</div>
        <div>Footer</div>
      </div>
    )
  }
}
