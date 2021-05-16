import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFeedbackStateAction } from '../../../../ducks/actions/feedback/feedback'

import * as Styled from './Feedback.styles'

const Modal = () => {
  const { feedbackState: { feedbackIsVisible, error, feedback } } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (feedbackIsVisible) {
      setTimeout(() => {
        dispatch(changeFeedbackStateAction({ error: false, feedback: '', feedbackIsVisible: false }))
      }, 3899)
    }
  }, [feedbackIsVisible, dispatch])
  return (
    <Styled.Wrapper error={error}>
      <h4>{feedback}</h4>
    </Styled.Wrapper>
  )
}

export default Modal
