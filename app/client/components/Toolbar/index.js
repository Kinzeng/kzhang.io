import React from 'react'
import Button from '../Buttons/Button'

const toolbarProps = {
  style: {
    width: '100%',
    display: 'block'
  }
}

const homeProps = {
  style: {
    float: 'left'
  }
}

const navProps = {
  style: {
    float: 'right'
  }
}

export default class Toolbar extends React.Component {
  constructor () {
    super()
    this.items = [
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
      <div {...toolbarProps}>
        <div {...homeProps}>
          <Button label='Kevin Zhang' link='/' />
        </div>

        <div {...navProps}>
          <Button label='Bye' link='/bye' />
        </div>
      </div>
    )
  }
}
