import { bindActionCreators } from 'redux'
import { connect } from 'ract-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

function mapStatetoProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStatetoProps, mapDispatchToProps)(Main)

export default App
