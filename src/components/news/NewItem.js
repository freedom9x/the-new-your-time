import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

class NewItem extends React.PureComponent {
  render() {
    const { content } = this.props
    const image = content.multimedia[0] ? content.multimedia[0] : null
    return (
      <Paper>
        <div>{content.snippet} </div>
        <div>{image ? image.url : null} </div>
        <div>{content.pub_date} </div>
        <div>{content.source} </div>
      </Paper>
    )
  }
}

export default NewItem

NewItem.defaultProps = {
  content: {
    snippet: '',
    multimedia: '',
    pub_date: '',
    source: '',
  },
}

NewItem.propTypes = {
  content: PropTypes.shape({
    snippet: PropTypes.string,
    multimedia: PropTypes.arrayOf(PropTypes.string),
    pub_date: PropTypes.string,
    source: PropTypes.string,
  }),
}
