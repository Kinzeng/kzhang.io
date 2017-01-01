import React from 'react'

const containerStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'black',
  color: 'white',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class Hello extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        Hello, World!
      </div>
    )
  }
}
