import React from 'react'

const defaultHeight = '50px'
const defaultWidth = '50px'

const linkStyle = {
  display: 'block'
}

const imageStyle = {
  height: '100%',
  width: '100%'
}

export default class LinkImage extends React.Component {
  render () {
    const linkProps = {
      style: {
        ...linkStyle,
        ...this.props.linkStyle,
        height: this.props.height || defaultHeight,
        width: this.props.width || defaultWidth
      },
      href: this.props.link,
      target: '_blank'
    }

    const imageProps = {
      style: this.props.imageStyle || imageStyle,
      src: this.props.image
    }

    return (
      <a {...linkProps}>
        <img {...imageProps} />
      </a>
    )
  }
}
