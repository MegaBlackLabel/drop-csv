// Constants
export const SETFILE = 'csv/file'
export const SETDATA = 'csv/data'

// Action Creators
export function setFile(f) {
  return {
    type: SETFILE,
    payload: {
      file: f,
      name: f.name,
      size: f.size
    }
  }
}

export function setData(r) {
  return {
    type: SETDATA,
    payload: {
      column: r.data[0].length,
      row: r.data.length
    }
  }
}


// Reducer
const initialState = {
  name: null,
  size: 0,
  column: 0,
  row: 0,
  fileLoaded: false,
  isParseFinish: false,
  file: null
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SETFILE: {
      return { ...state, file: action.payload.file, name: action.payload.name, size: action.payload.size, fileLoaded: true}
    }
    case SETDATA: {
      return { ...state, column: action.payload.column, row: action.payload.row, isParseFinish: true}
    }
    default: {
      return state
    }
  }
}