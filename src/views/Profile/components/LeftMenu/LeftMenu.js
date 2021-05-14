import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeProfileContentStateAction } from '../../../../ducks/actions/profile/changeProfileContentStateAction'

import * as Styled from './LeftMenu.styled'

const LeftMenu = () => {
  const dispatch = useDispatch()
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
        Filtros
      </Styled.MenuOption>
      <Styled.MenuOption>
        Novo contrato
      </Styled.MenuOption>
    </Styled.LeftMenuWrapper>
  )
}

export default LeftMenu
