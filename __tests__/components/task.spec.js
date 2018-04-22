import React from 'react'
import { shallow } from 'enzyme'
import Task from 'src/components/Task'

describe('Task', () => {
  it('should render an empty Component', () => {
    const wrapper = shallow(<div />)
    expect(wrapper.length).toBe(1)
  })

  it('should render an Task', () => {
    const task = shallow(<Task />)
    expect(task.length).toBe(1)
  })
})
