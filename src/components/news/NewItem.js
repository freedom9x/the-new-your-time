import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

const { I18n } = require('react-redux-i18n')

class NewItem extends React.PureComponent {
  renderImage() {
    const { content } = this.props
    const dumImageUrl = 'https://g1.nyt.com/assets/homepage/20180328-164832/images/foundation/logos/nyt-logo-379x64.svg'
    if (content.multimedia[0] && content.multimedia[0].url) {
      return (
        <div
          style={{ backgroundImage: `url(https://www.nytimes.com/${content.multimedia[0].url})` }}
          className="col-xs-12 item-image"
        />
      )
    }
    return (<div
      style={{
        backgroundImage: `url(${dumImageUrl})`,
        backgroundSize: '50% 50%',
        backgroundPosition: 'center',
        opacity: '0.4',
        backgroundColor: '#4c4a4a',
       }}
      className="col-xs-12 item-image"
    />)
  }

  render() {
    const { content } = this.props
    const date = I18n.l(content.pub_date, { dateFormat: 'date.long' })
    return (
      <Paper zDepth={1} className="col-xs-11 col-md-6 col-lg-6 new-item">
        {this.renderImage()}
        <div className="col-xs-12 new-title">{content.headline.main} </div>
        <div className="col-xs-12 new-snippet">{content.snippet} </div>
        <div className="col-xs-12 new-date-source">
          {I18n.t('newItem.from')}
          <span className="new-source"> {content.source} </span>
          {I18n.t('newItem.on')}
          <span className="new-date"> {date}</span>
        </div>
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
