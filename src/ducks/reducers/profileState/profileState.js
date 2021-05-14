import { CHANGE_PROFILE_CONTENT_STATE } from '../../actions/profile/changeProfileContentStateAction'
import createReducer from '../../../helpers/createReducer/createReducer'

const initialState = {
  profileContentState: 'dashboard'
}

export const profileState = createReducer(initialState, {
  [CHANGE_PROFILE_CONTENT_STATE]: (state, action) => ({
    ...state,
    profileContentState: action.payload
  })
})
