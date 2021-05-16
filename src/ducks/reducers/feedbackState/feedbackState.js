import {
  CHANGE_FEEDBACK_STATE_ACTION
} from '../../actions/feedback/feedback'
import createReducer from '../../../helpers/createReducer/createReducer'

const initialState = {
  error: false,
  feedback: '',
  feedbackIsVisible: false
}

export const feedbackState = createReducer(initialState, {
  [CHANGE_FEEDBACK_STATE_ACTION]: (state, action) => ({
    ...state,
    ...action.payload
  })
})
