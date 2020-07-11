import React from 'react'
import {render} from '@testing-library/react'
import <%= name %> from './index'

test('it matches the snapshot', () => {
  const {container} = render(<<%= name %>/>)
  expect(container).toMatchSnapshot()
})
