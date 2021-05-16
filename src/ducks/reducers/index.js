import { combineReducers } from 'redux'

import { profileState } from './profileState/profileState'
import { contractState } from './contractState/contractState'
import { modalState } from './modalState/modalState'
import { feedbackState } from './feedbackState/feedbackState'

export default combineReducers({
  profileState,
  contractState,
  modalState,
  feedbackState
})
