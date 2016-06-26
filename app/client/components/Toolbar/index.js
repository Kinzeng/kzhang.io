import React from 'react'
import {Link, withRouter} from 'react-router'

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
}

class Toolbar extends React.Component {
  render () {
    const items = this.props.items.map((item) => {
      if (item.link) {
        return <Link to={item.link} key={item.label}>{item.label}</Link>
      } else {
        return <span key={item.label}>{item.label}</span>
      }
    })

    return (
      <div style={style}>
        {items}
      </div>
    )
  }
}

export default withRouter(Toolbar)
