import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clientSideCookies from 'js-cookie'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Content from './components/Content/Content'

import * as Styled from './Profile.styled'
import { loadContractsAction } from '../../ducks/actions/contracts/contracts'
import Modal from './components/Modal/Modal'

const Profile = () => {
  const dispatch = useDispatch()
  const { modalIsVisible } = useSelector((state) => state.modalState)
  useEffect(() => {
    const cacheContracts = clientSideCookies.get('@sogo-test/savedContracts')
    const { savedContracts } = cacheContracts !== undefined ? JSON.parse(cacheContracts) : []
    if (savedContracts !== undefined) dispatch(loadContractsAction(savedContracts))
  }, [dispatch])
  return (
    <Styled.Wrapper>
      {modalIsVisible && <Modal />}
      <LeftMenu />
      <Content />
    </Styled.Wrapper>
  )
}

export default Profile
