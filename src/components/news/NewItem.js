import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

const { I18n } = require('react-redux-i18n')

class NewItem extends React.PureComponent {
  renderImage() {
    const { content } = this.props
    if (content.multimedia[0] && content.multimedia[0].url) {
      return (
        <div style={{
          backgroundImage: `url(https://www.nytimes.com/${content.multimedia[0].url})`,
          backgroundSize: '100%',
          height: '15em',
          backgroundRepeat: 'no-repeat',
        }}
        />
      )
    }
    return null
  }

  render() {
    const { content } = this.props
    // const image = content.multimedia[0] ? content.multimedia[0] : {}
    return (
      <Paper zDepth={0} className="col-md-5 col-xs-10">
        {this.renderImage()}
        <div>{content.snippet} </div>
        <div>{I18n.l(content.pub_date, { dateFormat: 'date.long' })} </div>
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
    multimedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
    pub_date: PropTypes.string,
    source: PropTypes.string,
  }),
}
