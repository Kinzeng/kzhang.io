import React from 'react'
import Skill, {containerStyle as defaultKeyStyle, nameStyle as blankStyle} from './Skill'
import {text, darkerBlue} from '../../colors'
import {titleStyle} from '..'
import {skills} from '../../content'

export const background = darkerBlue.string()

const containerStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: background,
  color: text.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const skillsStyle = {
  flex: '1 1 auto',
  width: '100%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const keyStyle = {
  ...defaultKeyStyle,
  marginBottom: '2%'
}

const keyLabelsStyle = {
  marginLeft: '10%',
  width: '70%',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default class Skills extends React.Component {
  render () {
    const skillBoxes = skills.map((skill, i) => {
      const skillProps = {
        ...skill,
        key: i
      }

      return <Skill {...skillProps} />
    })

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>What I Know</h1>
        <div style={skillsStyle}>
          <div style={keyStyle}>
            <div style={blankStyle} />
            <div style={keyLabelsStyle}>
              <div>Beginner</div>
              <div>Familiar</div>
              <div>Proficient</div>
              <div>Advanced</div>
            </div>
          </div>
          {skillBoxes}
        </div>
      </div>
    )
  }
}
