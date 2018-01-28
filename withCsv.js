import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, pure, withHandlers } from 'recompose'
import Papa from 'papaparse'
import * as CounterActions from './reducers'

const connector = connect(
  state => {
    return state
  },
  dispatch => ({ actions: bindActionCreators({ ...CounterActions }, dispatch) })
)

const withCsv = compose(
  connector,
  pure,
  withHandlers({
    handleDrop: props => files => {
      for (const file of files) {
        props.actions.setFile(file)
        Papa.parse(file, {
          complete: (results) => {
            props.actions.setData(results)
          }
        })
      }
    }
  })
)

export default withCsv