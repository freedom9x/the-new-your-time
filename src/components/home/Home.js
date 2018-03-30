import React from 'react'
import PropTypes from 'prop-types'
import NewList from '../news/NewList'

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNewList('singapore', 1)
  }

  render() {
    const { news, isSuccess } = this.props
    return (
      <div>
        <div className="home-image-header" />
        <div>
          {
            isSuccess ? <NewList items={news} /> : null
          }

        </div>
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
}

