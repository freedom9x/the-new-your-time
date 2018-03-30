import React from 'react'
import PropTypes from 'prop-types'
import { TinyPagination } from 'react-pagination-custom'
import { FlatButton, RaisedButton } from 'material-ui'
import NewList from '../news/NewList'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.changePage = this.changePageId.bind(this)
    this.renderBtnNumber = this.renderBtnNumber.bind(this)
  }

  componentDidMount() {
    const { selectedPageId } = this.props
    this.props.fetchNewList('singapore', selectedPageId - 1)
    this.updateDeviceSize()
    window.addEventListener('resize', this.updateDeviceSize.bind(this))
  }

  componentDidUpdate(prevProps) {
    const { selectedPageId } = this.props
    if (prevProps.selectedPageId !== selectedPageId) {
      this.props.fetchNewList('singapore', selectedPageId - 1)
    }
  }

  updateDeviceSize() {
    this.props.setWindowWidth(window.innerWidth)
  }

  changePageId(pageId) {
    const { selectedPageId } = this.props
    switch (pageId) {
      case 'PRE':
        this.props.changePageId(selectedPageId - 1)
        break
      case 'NEXT':
        this.props.changePageId(selectedPageId + 1)
        break
      default:
        this.props.changePageId(pageId)
        break
    }
  }

  renderBtnNumber(pageId) {
    const { selectedPageId, windowWidth } = this.props
    let buttonStyle = {}
    if (windowWidth < 900) {
      buttonStyle = { minWidth: '50px' }
    }
    if (selectedPageId === pageId) {
      return (
        <RaisedButton
          onClick={() => { this.changePageId(pageId) }}
          key={pageId}
          primary
          label={pageId}
          style={buttonStyle}
        />
      )
    }
    return (
      <FlatButton
        onClick={() => { this.changePageId(pageId) }}
        key={pageId}
        primary
        label={pageId}
        style={buttonStyle}
      />
    )
  }

  renderList() {
    const { news, selectedPageId, windowWidth } = this.props
    let maxBtnPerSide = 2
    if (windowWidth < 900) {
      maxBtnPerSide = 0
    } else {
      maxBtnPerSide = 1
    }
    return (
      <div className="container">
        <NewList items={news} />
        <div className="row">
          <TinyPagination
            total={10 * 201}
            selectedPageId={selectedPageId}
            itemPerPage={10}
            renderBtnNumber={this.renderBtnNumber}
            maxBtnNumbers={6}
            maxBtnPerSide={maxBtnPerSide}
            preKey="..."
            nextKey="..."
          />
        </div>
      </div>
    )
  }

  render() {
    const { isSuccess, isFail, errorMsg } = this.props
    return (
      <div>
        <div className="home-image-header" />
        {isSuccess ? this.renderList() : null}
        {isFail ? <div style={{ color: 'red' }} >{errorMsg} </div> : null}
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  fetchNewList: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(PropTypes.shape({
    snippet: PropTypes.string,
    multimedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
    pub_date: PropTypes.string,
    source: PropTypes.string,
  })).isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isFail: PropTypes.bool.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  selectedPageId: PropTypes.number.isRequired,
  changePageId: PropTypes.func.isRequired,
  setWindowWidth: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
}

