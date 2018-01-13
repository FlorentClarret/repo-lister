/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "List of posts" heading', () => {
    const app = shallow(<App posts={[{id: 1}]}/>)

    expect(app.find('h1').text()).toEqual('List of posts')
  })
})

describe('With Snapshot Testing', () => {
  it('App matches snapshot', () => {
    const component = renderer.create(<App posts={[{id: 2}]}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})