import {
  CHANGE_MODAL_CONTENT,
  CHANGE_MODAL_DATA,
  CHANGE_MODAL_VISIBILITY
} from '../../actions/modal/modal'
import createReducer from '../../../helpers/createReducer/createReducer'

const initialState = {
  modalContentState: 'register-person',
  modalData: {},
  modalIsVisible: false
}

export const modalState = createReducer(initialState, {
  [CHANGE_MODAL_CONTENT]: (state, action) => ({
    ...state,
    modalContentState: action.payload
  }),
  [CHANGE_MODAL_DATA]: (state, action) => ({
    ...state,
    modalData: action.payload
  }),
  [CHANGE_MODAL_VISIBILITY]: (state, action) => ({
    ...state,
    modalIsVisible: action.payload
  })
})
