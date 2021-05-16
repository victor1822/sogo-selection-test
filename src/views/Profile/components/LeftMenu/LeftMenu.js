import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeModalContentState, changeModalVisibility } from '../../../../ducks/actions/modal/modal'
import { changeProfileContentStateAction } from '../../../../ducks/actions/profile/changeProfileContentStateAction'

import * as Styled from './LeftMenu.styled'

const LeftMenu = () => {
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch(changeModalContentState('register-person'))
    dispatch(changeModalVisibility(true))
  }
  const { profileContentState } = useSelector((state) => state.profileState)
  return (
    <Styled.LeftMenuWrapper>
      <Styled.MenuOption
        active={profileContentState === 'dashboard'}
        onClick={() => dispatch(changeProfileContentStateAction('dashboard'))}
      >
        Dashboard
      </Styled.MenuOption>
      <Styled.MenuOption
        active={profileContentState === 'filters'}
        onClick={() => dispatch(changeProfileContentStateAction('filters'))}
      >
        Seus contratos
      </Styled.MenuOption>
      <Styled.MenuOption onClick={showModal}>
        Novo contrato
      </Styled.MenuOption>
    </Styled.LeftMenuWrapper>
  )
}

export default LeftMenu
