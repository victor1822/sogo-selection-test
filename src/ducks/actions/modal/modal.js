export const CHANGE_MODAL_VISIBILITY = 'CHANGE_MODAL_VISIBILITY'
export const CHANGE_MODAL_CONTENT = 'CHANGE_MODAL_CONTENT'
export const CHANGE_MODAL_DATA = 'CHANGE_MODAL_DATA'

export const changeModalVisibility = (boolean) => ({
  type: CHANGE_MODAL_VISIBILITY,
  payload: boolean
})

export const changeModalContentState = (contentState) => ({
  type: CHANGE_MODAL_CONTENT,
  payload: contentState
})

export const changeModalDataState = (modalDataState) => ({
  type: CHANGE_MODAL_DATA,
  payload: modalDataState
})
