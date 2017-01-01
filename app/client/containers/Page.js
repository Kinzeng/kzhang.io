import React from 'react'
import {VIEWPORT_HEIGHT} from '../constants'

const defaultContainerStyle = {
  height: `${VIEWPORT_HEIGHT}px`,
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export default class Page extends React.Component {
  render () {
    const containerStyle = {
      ...defaultContainerStyle,
      ...this.props.style
    }

    return (
      <div style={containerStyle}>
        {this.props.children}
      </div>
    )
  }
}
