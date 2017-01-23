import React from 'react'
import Project from './Project'
import {text, gray, blue, darkBlue} from '../../colors'
import {titleStyle} from '..'
import {projects} from '../../content'

export const background = gray.darken().string()

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

const projectsContainerStyle = {
  flexGrow: 1,
  width: '100%',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const leftStyle = {
  paddingTop: '1%',
  width: '50%',
  backgroundColor: darkBlue.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const projectsStyle = {
  width: '100%',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const rightStyle = {
  padding: '1%',
  paddingTop: '2%',
  width: '50%',
  textAlign: 'center',
  lineHeight: '2em',
  backgroundColor: blue.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const projectTitleStyle = {
  margin: 0
}

const imageStyle = {
  marginTop: '2.5%',
  maxWidth: '80%',
  cursor: 'pointer'
}

const defaultProject = {
  description: (
    <div style={{fontSize: '1.5em'}}>
      Hover over a project for a description or click on it to visit their website!
    </div>
  )
}

export default class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {project: defaultProject, active: null}
  }

  hover (project, i) {
    this.setState({project, active: i})
  }

  render () {
    const projectBoxes = projects.map((project, i) => {
      const projectProps = {
        ...project,
        active: this.state.active === i,
        hover: this.hover.bind(this, project, i),
        // unhover: this.setState.bind(this, {project: defaultProject}),
        key: i
      }

      return <Project {...projectProps} />
    })

    const imageProps = {
      style: imageStyle,
      src: this.state.project.imageUrl
    }

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>My Projects</h1>
        <div style={projectsContainerStyle}>
          <div style={leftStyle}>
            <div style={projectsStyle}>{projectBoxes}</div>
          </div>
          <div style={rightStyle}>
            <h2 style={projectTitleStyle}>{this.state.project.title}</h2>
            <div>{this.state.project.description}</div>
            <a style={{cursor: 'default'}} href={this.state.project.url}><img {...imageProps} /></a>
          </div>
        </div>
      </div>
    )
  }
}
