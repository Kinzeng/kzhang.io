import React from 'react'
import SkillBar from './SkillBar'

export const containerStyle = {
  padding: '0 10%',
  marginBottom: '5%',
  height: '20px',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export const nameStyle = {
  width: '10%',
  fontSize: '1.5em',
  textAlign: 'right'
}

export default class Skill extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        <div style={nameStyle}>{this.props.name}</div>
        <SkillBar proficiency={this.props.proficiency} />
      </div>
    )
  }
}
