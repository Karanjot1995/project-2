import { NAVDATA, FORMDATA } from '../actions/action'

const initialState = {
  navdata: {},
  formdata: {}
}


function reducer(state = initialState, action) {

  switch (action.type) {

    case NAVDATA:
      return Object.assign({}, state, {
        navdata: action.payload
      })

    case FORMDATA:
      return Object.assign({}, state, {
        formdata: action.payload
      })

    default:
      return state;
  }
};

export default reducer
