import React from 'react'
import {gray, green} from '../../colors'

const containerStyle = {
  position: 'relative',
  marginLeft: '10%',
  height: '15px',
  width: '70%',
  borderRadius: '15px',
  backgroundColor: gray.lighten().string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const barStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  borderRadius: '15px'
}

export default class SkillBar extends React.Component {
  render () {
    const bar = {
      ...barStyle,
      width: `${this.props.proficiency}%`,
      backgroundColor: green.string()
    }

    return (
      <div style={containerStyle}>
        <div style={bar} />
      </div>
    )
  }
}
