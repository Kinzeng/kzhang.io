import React from 'react'

export default class NavButtons extends React.Component {
  render () {
    let i = 0
    const buttons = React.Children.map(
      this.props.children,
      (button) => <span key={i++} style={{marginLeft: '5%'}}>{button}</span>
    )

    return <div {...this.props}>{buttons}</div>
  }
}
