import React from 'react'
import LinkImage from '../components/LinkImage'
import {titleStyle} from '.'
import {text, black} from '../colors'
import {links} from '../content'

export const background = black.string()
const containerStyle = {
  flex: '1 1 auto',
  width: '100%',
  backgroundColor: background,
  color: text.string(),

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const iconsStyle = {
  marginBottom: '5%',
  width: '50%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}

export default class Contact extends React.Component {
  render () {
    const linkImages = links.map((linkImage, i) => {
      const linkImageProps = {
        ...linkImage,
        key: i
      }

      return <LinkImage {...linkImageProps} />
    })

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Let's Get in Touch!</h1>
        <div style={iconsStyle}>
          {linkImages}
        </div>
      </div>
    )
  }
}
