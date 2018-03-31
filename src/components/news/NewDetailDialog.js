import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, FlatButton } from 'material-ui'

const { I18n } = require('react-redux-i18n')

class NewDetailDialog extends React.PureComponent {
  render() {
    const { content, isOpen } = this.props
    const date = I18n.l(content.pub_date, { dateFormat: 'date.long' })
    const imageBaseUrl = 'https://www.nytimes.com/'

    if (content) {
      return (
        <div>
          <Dialog
            title={content.headline.main}
            modal={false}
            open={isOpen}
            onRequestClose={this.props.handleClose}
            autoScrollBodyContent
            actions={[
              <FlatButton
                label="Close"
                primary
                onClick={this.props.handleClose}
              />,
            ]}
          >
            <div className="col-xs-12 new-date-source">
              {I18n.t('newItem.from')}
              <span className="new-source"> {content.source} </span>
              {I18n.t('newItem.on')}
              <span className="new-date"> {date}</span>
            </div>
            <div className="col-xs-12 new-snippet" style={{ opacity: '1' }}>
              {content.snippet}
            </div>
            <div className="col-xs-12">
              {I18n.t('newItem.Multimedia')}
              {content.multimedia.map(mul => (
                <div key={mul.url}>
                  <a href={imageBaseUrl + mul.url} target="_blank">
                    {imageBaseUrl + mul.url}
                  </a>
                </div>
                ))}
            </div>
          </Dialog>
        </div>
      )
    }
    return null
  }
}

export default NewDetailDialog

NewDetailDialog.defaultProps = {
  content: {
    snippet: '',
    multimedia: [],
    pub_date: '',
    source: '',
    headline: {
      main: '',
    },
  },
}

NewDetailDialog.propTypes = {
  content: PropTypes.shape({
    snippet: PropTypes.string,
    multimedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
    })),
    pub_date: PropTypes.string,
    source: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}
