import React from 'react'

export default class Hello extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let page = []
    for (let i = 0; i < 1000; i++) {
      page.push(<div key={i}>This is the homepage! {i}</div>)
    }

    return (
      <div>
        {page}
      </div>
    )
  }
}
