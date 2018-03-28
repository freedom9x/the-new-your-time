import React from 'react'
import PropTypes from 'prop-types'

class Home extends React.PureComponent {
  render() {
    return <div>{this.props.title}</div>
  }
}

export default Home
Home.propTypes = {
  title: PropTypes.string.isRequired,
}

