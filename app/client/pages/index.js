import React from 'react'
import Page from '../containers/Page'
import Home, {background as homeBackground} from './Home'
import About, {background as aboutBackground} from './About'
import Projects, {background as projectsBackground} from './Projects'
import Skills, {background as skillsBackground} from './Skills'
import Contact, {background as contactBackground} from './Contact'

const pages = []

function createPage (background, component) {
  pages.push({background, component})
}

createPage(homeBackground, <Page><Home /></Page>)
createPage(aboutBackground, <Page><About /></Page>)
createPage(projectsBackground, <Page><Projects /></Page>)
createPage(skillsBackground, <Page><Skills /></Page>)
createPage(contactBackground, <Contact />)

export default pages
export const titleStyle = {
  margin: '5% 0'
}
