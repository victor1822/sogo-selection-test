import React from 'react'
import { useSelector } from 'react-redux'
import RegisterPersonContent from './components/RegisterPersonContent/RegisterPersonContent'
import RegisterContractContent from './components/RegisterContractContent/RegisterContractContent'

import * as Styled from './Modal.styled'

const Modal = () => {
  const { modalContentState } = useSelector((state) => state.modalState)
  // useEffect(() => {
  //   // eslint-disable-next-line no-alert
  //   alert(modalContentState)
  // }, [modalContentState])
  return (
    <Styled.ModalOverlay>
      {modalContentState === 'register-person' && <RegisterPersonContent />}
      {modalContentState === 'contract-register' && <RegisterContractContent />}
    </Styled.ModalOverlay>
  )
}

export default Modal
