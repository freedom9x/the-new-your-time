// test shallow rendering
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NewItem from '../components/news/NewItem'

configure({ adapter: new Adapter() })
describe('Should render <NewItem /> success', () => {
  it('set props', () => {
    const content = {
      snippet: '',
      multimedia: [],
      pub_date: '',
      source: '',
      headline: { main: '' },
    }
    const selectNew = sinon.spy()
    const wrapper = mount(
    <MuiThemeProvider>
      <NewItem
        key={1}
        content={content}
        selectNew={selectNew}
        index={1}
      />
    </MuiThemeProvider>)
    expect(wrapper.children()).toHaveLength(1)
  })
})
