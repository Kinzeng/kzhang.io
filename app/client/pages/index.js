import React from 'react'
import Home, {background as homeBackground} from './Home'
import About, {background as aboutBackground} from './About'
import Projects, {background as projectsBackground} from './Projects'
import Skills, {background as skillsBackground} from './Skills'

const pages = []

function createPage (background, component) {
  pages.push({background, component})
}

createPage(homeBackground, <Home />)
createPage(aboutBackground, <About />)
createPage(projectsBackground, <Projects />)
createPage(skillsBackground, <Skills />)

export default pages
export const titleStyle = {
  margin: '5% 0'
}
