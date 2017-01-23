import React from 'react'
import {text, black} from '../colors'

const containerStyle = {
  paddingTop: '5%',
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
  marginTop: '2.5%',
  width: '100%',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const profileStyle = {
  height: '75%',
  width: '40%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'flex-end'
}

const imageProps = {
  style: {
    maxHeight: '75%'
  },
  src: '/photos/profile.jpg'
}

const textStyle = {
  marginLeft: '2em',
  height: '75%',
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
        <h1>About Me</h1>
        <div style={bioStyle}>
          <div style={profileStyle}>
            <img {...imageProps} />
          </div>
          <div style={textStyle}>
            Hello there! My name is Kevin and I'm about to graduate with a Bachelor's
            degree in computer science from New York University in May 2017. I've been
            coding for many years now, so I guess you could call me a coder. But I think
            it's better to call me an architect because coding isn't just typing in lines
            and lines of code; it's building and creating and shaping the codebase to
            make it easier for me and others to code. And that's why software engineering
            is so exciting. The whole open source mindset really pushes for innovation
            and advancement, and I can't think of a better time to be alive. Let's get
            in touch!

            {/*
            and I think the most interesting thing about
            coding is the idea of building up the groundwork of a healthy codebase.
            Similar to building skyscrapers, the foundations of an application determine
            just how high it can go, and I am committed to creating scalable and reusable
            code wherever I can. The idea of applying my skills to build this skyscraper
            to change the world drives me forward, and I can't wait to get started. When
            I'm not coding, I am definitely playing video games, playing the piano or
            ukelele, or singing loudly in the shower.
            */}
          </div>
        </div>
      </div>
    )
  }
}

export const background = black.string()
