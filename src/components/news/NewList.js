import React from 'react'
import PropTypes from 'prop-types'
import NewItem from './NewItem'

class NewList extends React.PureComponent {
  render() {
    const { items } = this.props
    return (

      <div className="row new-list-container">
        {
          items.map(content => (
            <NewItem content={content} key={content._id} />
        ))
        }
      </div>
    )
  }
}

export default NewList

NewList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    snippet: PropTypes.string,
    multimedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
    pub_date: PropTypes.string,
    source: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
}
