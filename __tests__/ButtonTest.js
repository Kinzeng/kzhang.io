/* eslint-env jest */

jest.unmock('../app/client/components/Buttons/Button')

import util from 'util'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import {Link} from 'react-router'
import Button from '../app/client/components/Buttons/Button'

describe('Button component', () => {
  let renderer
  let component
  beforeEach(() => {
    renderer = TestUtils.createRenderer()
  })

  it('renders a span with the label based on the children', () => {
    component = renderer.render(<Button>Button</Button>)
    expect(component.type).toBe('span')
    expect(component.props.children).toEqual('Button')

    component = TestUtils.renderIntoDocument(<Button>Button1</Button>)
    let button = TestUtils.findRenderedDOMComponentWithTag(component, 'span')
    expect(button.textContent).toBe('Button1')

    component = TestUtils.renderIntoDocument(<Button>Button2</Button>)
    button = TestUtils.findRenderedDOMComponentWithTag(component, 'span')
    expect(button.textContent).toBe('Button2')
  })

  it('renders a Link component if a link prop is passed in', () => {
    component = renderer.render(<Button link='/button'>Button</Button>)
    expect(component.type).toBe(Link)
    expect(component.props.children).toEqual('Button')

    component = TestUtils.renderIntoDocument(<Button link='/button'>Button</Button>)
    TestUtils.findRenderedComponentWithType(component, Link)
  })

  it('executes an onClick function when clicked', () => {
    let counter = 0
    const onClick = () => {
      counter++
    }

    component = TestUtils.renderIntoDocument(<Button onClick={onClick}>Button</Button>)
    const node = ReactDOM.findDOMNode(component)

    expect(counter).toBe(0)
    TestUtils.Simulate.click(node)
    expect(counter).toBe(1)
    TestUtils.Simulate.click(node)
    expect(counter).toBe(2)
  })

  it('changes style when the mouse hovers over', () => {
    component = TestUtils.renderIntoDocument(<Button>Button</Button>)
    const node = ReactDOM.findDOMNode(component)

    const initialStye = util.inspect(node.style)
    TestUtils.Simulate.mouseEnter(node)
    expect(util.inspect(node.style)).not.toEqual(initialStye)
    TestUtils.Simulate.mouseLeave(node)
    expect(util.inspect(node.style)).toEqual(initialStye)
  })

  it('accepts a style prop that overrides the default style', () => {
    const style = {
      backgroundColor: 'black',
      color: 'white'
    }

    component = TestUtils.renderIntoDocument(<Button style={style}>Button</Button>)
    const componentStyle = ReactDOM.findDOMNode(component).style
    expect(componentStyle.getPropertyValue('background-color')).toBe('black')
    expect(componentStyle.getPropertyValue('color')).toBe('white')
  })
})
