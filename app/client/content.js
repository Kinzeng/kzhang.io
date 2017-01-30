import React from 'react'
import {text} from './colors'

const content = {}

function createContent (contentName, fields) {
  return function () {
    if (!content[contentName]) {
      content[contentName] = []
    }

    const value = {}

    for (let i = 0; i < fields.length; i++) {
      value[fields[i]] = arguments[i]
    }

    content[contentName].push(value)
  }
}

const createProject = createContent('projects', [
  'title',
  'description',
  'url',
  'imageUrl'
])

createProject(
  'Jeopardizer',
  <div>
    Jeopardizer is a lightweight and easy to use web application that
    creates Jeopardy style games. No more Powerpoint! While there are
    other web applications that do this, they all require signing up
    which I think deters users from wanting to use the apps. Jeopardizer
    let's you create and play games without such a hassle!
  </div>,
  'http://jeopardizer.com',
  '/photos/jeopardizer.png'
)

createProject(
  'Type Trainer',
  <div>
    Type Trainer is a web application that helps users practice their
    typing. I made Type Trainer to practice React and Redux, but I switched
    to the Dvorak keyboard layout near the beginning of 2016 so I found
    myself practicing a lot. A typing app seemed natural to build!
  </div>,
  'http://type-trainer.kzhang.io',
  '/photos/type-trainer.png'
)

createProject(
  'Givmo',
  <div>
    Givmo is a mobile application hacked together for HackPrinceton 2016
    which simulates an extension onto the Venmo mobile application. The
    basic idea is to make it easier for people to donate, and so Givmo
    simply asks users to round their payments to the next dollar to
    donate the extra cents. These small amounts can really add up.
  </div>,
  'http://givmo.kzhang.io',
  '/photos/givmo.png'
)

createProject(
  'Socket.io Chat',
  <div>
    Socket.io Chat is a basic web application that uses socket.io to
    provide real time functionality to the chat application. Users
    select a username when they first open the application and can
    message all the other users in the chat room. An "is typing"
    feature is implemented that lets users see who else is currently typing.
  </div>,
  'https://github.com/Kinzeng/socket.io-chat',
  '/photos/chat.png'
)

createProject(
  'DnD Character Sheet',
  <div>
    DnD Character Sheet is the final project for Applied Internet
    Technology, a class I took in Fall 2016. The application lets
    users manage their Dungeons and Dragons characters on the web
    instead of having them keep track of their characters on paper.
    The app does a lot of calculations for the user so that they
    don't have to.
  </div>,
  'https://github.com/Kinzeng/dnd-character-sheet',
  '/photos/dnd.png'
)

const linkProps = {
  style: {
    color: text.string(),
    cursor: 'pointer'
  },
  href: 'https://github.com/Kinzeng/kzhang.io',
  target: '_blank'
}
createProject(
  'kzhang.io',
  <div>
    I created this website from scratch using React because I love how
    intuitive the framework is. I broke down each part of the website
    into reusable components so that I can continue to develop this
    website as I grow and learn. Check out the code <a {...linkProps}>here!</a>
  </div>,
  'https://github.com/Kinzeng/kzhang.io'
)

const createSkill = createContent('skills', [
  'name',
  'proficiency'
])

createSkill('Java', 90)
createSkill('Node', 90)
createSkill('React', 90)
createSkill('SQL', 75)
createSkill('MongoDB', 70)
createSkill('HTML/CSS', 95)
createSkill('Javascript', 95)

const createLink = createContent('links', [
  'link',
  'image'
])

createLink('mailto:kevin@kzhang.io', '/photos/email.png')
createLink('https://github.com/Kinzeng', '/photos/github.png')
createLink('https://www.linkedin.com/in/kevin-zhang-09bb80ba', '/photos/linkedin.png')

module.exports = content
