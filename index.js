import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone'
import Papa from 'papaparse'

import createStore from './createStore'

import withCsv from './withCsv'

const store = createStore()

const Result = props => {
    console.log(props)
    if (props.isParseFinish) {
        return (
                <div data-test="textbox">
                  <div>
                    ファイル名は <div data-test="filename">{props.name}</div>
                  </div>
                  <div>
                    カラム数は <div data-test="column">{props.column}</div>
                  </div>
                  <div>
                    データ数は <div data-test="row">{props.row}</div>
                  </div>
                  <div>
                    重さは<div data-test="size">{props.size}</div>
                  </div>
                </div>
        )
    }
    return (<div />)
}

const CsvApp = withCsv(props => {
    console.log(props)
    return (
        <div>
            <Dropzone onDrop={props.handleDrop}>Drop CSV here.</Dropzone>
            <Result {...props} />
        </div>
    )
  })

// class CsvApp extends Component {
//     constructor(props) {
//         super(props)
//         this.handleDrop = this.handleDrop.bind(this)
//         this.state = {
//             rows: [],
//         }
//     }
//     handleDrop(files) {
//         for (const file of files) {
//             console.log("file:", file)
//             Papa.parse(file, {
//                 complete: (results) => {
//                     console.log("result:", results)
//                     console.log("Finished:", results.data)
//                     this.setState({ rows: results.data })
//                 }
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Dropzone onDrop={this.handleDrop}>Drop CSV here.</Dropzone>
//                 <p>{this.state.rows}</p>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <CsvApp/>
    </Provider>,
    document.getElementById('app')
)
