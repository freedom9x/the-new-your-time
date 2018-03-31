import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from 'material-ui'

class SkeNewList extends React.PureComponent {
  renderSkeItem() {
    const { numberOfSkeNew } = this.props
    const items = []
    for (let i = 0; i < numberOfSkeNew; i += 1) {
      const item = (
        <div
          className="skeleton col-xs-12 col-sm-6 col-lg-6 new-item-container"
          key={i}
        >
          <Paper
            className="col-xs-12 new-item"
            zDepth={2}
          >
            <div
              style={{
                opacity: '0.4',
                backgroundColor: '#4c4a4a',
              }}
              className="row item-image"
            />
            <div className="col-xs-12 ske-text-container">
              <div className="col-xs-12 new-title" />
              <div className="col-xs-12 new-date-source" />
              <div className="col-xs-12 new-snippet" />
              <div className="col-xs-12 new-snippet" />
            </div>
          </Paper>
        </div>)
      items.push(item)
    }
    return items
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderSkeItem()}
        </div>
      </div>
    )
  }
}

export default SkeNewList

SkeNewList.propTypes = {
  numberOfSkeNew: PropTypes.number.isRequired,
}
