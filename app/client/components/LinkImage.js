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
        height: !this.props.linkStyle ? (this.props.height || defaultHeight) : 'auto',
        width: !this.props.linkStyle ? (this.props.width || defaultWidth) : 'auto'
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

LinkImage.propTypes = {
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  link: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired
}
