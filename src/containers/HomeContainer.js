import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/home/Home'
import * as actionCreators from '../actions/newAction'

const mapStateToProps = (state, ownProps) => ({
  ...state.newsReducer,
  ...ownProps,
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer
