import React from 'react'
import {titleStyle} from '.'
import {text, black} from '../colors'

const containerStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: black.string(),
  color: text.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const bioStyle = {
  height: '75%',
  width: '80%',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'flex-start'
}

const profileStyle = {
  height: '75%',
  width: '80%',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'flex-start'
}

const imageProps = {
  style: {
    maxHeight: '100%'
  },
  src: '/photos/profile.jpg'
}

const textStyle = {
  marginLeft: '2em',
  height: '100%',
  width: '40%',
  fontSize: '1.25em',
  lineHeight: '1.5em',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class About extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>About Me</h1>
        <div style={bioStyle}>
          <div style={profileStyle}>
            <img {...imageProps} />
            <div style={textStyle}>
              Hello there! My name is Kevin and I'm about to graduate with a Bachelor's
              degree in computer science from New York University in May 2017. I've been
              learning computer science for many years now, so I guess you could call me
              a coder. But the term "Software Engineer" comes about because coding isn't
              just typing in lines and lines of code; it's building, designing, and
              shaping the codebase to really forge the basis or even end product of an
              application. And that's why software engineering is so exciting. The whole
              idea of engineers collaborating really pushes for innovation and advancement,
              and I can't describe what it feels like to be part of it. Let's get in touch!
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const background = black.string()
