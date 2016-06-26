import React from 'react'
import Toolbar from '../components/toolbar'

const appProps = {
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)'
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
  constructor (props) {
    super(props)
    this.toolBarItems = [
      {
        label: 'Toolbar'
      },
      {
        label: 'Homepage',
        link: '/'
      },
      {
        label: 'Bye',
        link: '/bye'
      }
    ]
  }

  render () {
    return (
      <div {...appProps}>
        <div>
          <img {...imageProps} />
        </div>
        <Toolbar items={this.toolBarItems} />
        <div>{this.props.children}</div>
        <div>Footer</div>
      </div>
    )
  }
}
