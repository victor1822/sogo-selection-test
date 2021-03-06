import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clientSideCookies from 'js-cookie'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Content from './components/Content/Content'

import * as Styled from './Profile.styled'
import { loadContractsAction } from '../../ducks/actions/contracts/contracts'
import Modal from './components/Modal/Modal'
import Feedback from './components/Feedback/Feedback'

const Profile = () => {
  const dispatch = useDispatch()
  const { modalState: { modalIsVisible }, feedbackState } = useSelector((state) => state)
  useEffect(() => {
    const cacheContracts = clientSideCookies.get('@sogo-test/savedContracts')
    const { savedContracts } = cacheContracts !== undefined ? JSON.parse(cacheContracts) : []
    const mapedSavedContracts = savedContracts?.map((item) => ({
      ...item,
      creation_date: new Date(item?.creation_date),
      valid_thru: new Date(item?.valid_thru)
    })) ?? []
    if (savedContracts !== undefined) dispatch(loadContractsAction(mapedSavedContracts))
  }, [dispatch])
  return (
    <Styled.Wrapper>
      {feedbackState.feedbackIsVisible && <Feedback />}
      {modalIsVisible && <Modal />}
      <LeftMenu />
      <Content />
    </Styled.Wrapper>
  )
}

export default Profile
