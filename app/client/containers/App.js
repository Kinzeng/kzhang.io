import React from 'react'
import Navbar from '../components/Navbar'

const appProps = {
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontFamily: 'Garamond'
  }
}

const headerProps = {
  style: {
    width: '75%',
    textAlign: 'center',
    // position: 'fixed',
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

const viewProps = {
  style: {
    marginTop: '0px'
  }
}

export default class App extends React.Component {
  render () {
    return (
      <div {...appProps}>
        <div {...headerProps}>
          <img {...imageProps} />
          <Navbar />
        </div>

        <div {...viewProps}>
          {this.props.children}
        </div>

        <div>Footer</div>
      </div>
    )
  }
}
