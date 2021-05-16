export const CHANGE_FEEDBACK_STATE_ACTION = 'CHANGE_FEEDBACK_STATE_ACTION'

export const changeFeedbackStateAction = (newFeedbackState) => ({
  type: CHANGE_FEEDBACK_STATE_ACTION,
  payload: newFeedbackState
})
