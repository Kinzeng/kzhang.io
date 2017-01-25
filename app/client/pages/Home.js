import React from 'react'
import {text, darkerBlue} from '../colors'

export const background = darkerBlue.string()

const containerStyle = {
  height: '100%',
  width: '100%',
  color: text.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const imageProps = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1
  },
  src: '/photos/background.jpg'
}

const textStyle = {
  fontSize: '2em',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const titleStyle = {
  // fontFamily: 'Josefin-Slab',
  // fontFamily: 'Questrial',
  fontFamily: 'Alegreya',
  fontSize: '2em',
  opacity: 0,
  animation: 'fadeInUp 0.75s ease-out 0s forwards'
}

const nameStyle = {

}

const subtitleStyle = {
  opacity: 0,
  marginTop: '1em',
  fontSize: '0.75em',
  textAlign: 'center',
  animation: 'fadeInUp 0.75s ease-out 0.25s forwards'
}

const linkStyle = {
  ...subtitleStyle,
  cursor: 'pointer',
  animation: 'fadeInUp 0.75s ease-out 0.5s forwards'
}

const arrowStyle = {
  fontSize: '0.75em'
}

export default class Home extends React.Component {
  render () {
    const linkProps = {
      style: linkStyle,
      onClick: this.props.scroll.bind(null, 1, 1000)
    }

    return (
      <div style={containerStyle}>
        <img {...imageProps} />
        <div style={textStyle}>
          <div style={titleStyle}>Hi, I'm <span style={nameStyle}>Kevin</span></div>
          <div style={subtitleStyle}>Technology has changed our lives, and I'm excited to be at the forefront.</div>
          <div {...linkProps}>Let me show you why <span style={arrowStyle}>&#10095;&#10095;</span></div>
        </div>
      </div>
    )
  }
}
