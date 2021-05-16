import React, { useEffect } from 'react'

import { uuid } from 'uuidv4'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './RegisterContractContent.styles'

import validationSchema from './validationSchema'
import {
  changeModalContentState,
  changeModalVisibility,
  changeModalDataState
} from '../../../../../../ducks/actions/modal/modal'
import { addNewContractAction } from '../../../../../../ducks/actions/contracts/contracts'
import { changeFeedbackStateAction } from '../../../../../../ducks/actions/feedback/feedback'

const RegisterContractContent = () => {
  const title = 'Cadastre aqui os dados do novo contrato'
  const {
    register, handleSubmit, errors, control, watch
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema)
  })
  const dispatch = useDispatch()
  const goBack = () => {
    dispatch(changeModalContentState('register-person'))
  }
  const {
    modalState: {
      modalData: {
        name, cpf, email, cep, address, number, complement, neighbourhood, city, state: sstate
      }
    },
    contractState: {
      contracts
    }
  } = useSelector((state) => state)
  const chagedNumber = watch('number')
  useEffect(() => {
    if (contracts.map((item) => item?.number).includes(chagedNumber)) {
      dispatch(changeFeedbackStateAction({
        error: true,
        feedback: 'Já temos um registro de um contrato com este número, não será possível registrá-lo',
        feedbackIsVisible: true
      }))
    }
  }, [chagedNumber])
  const onFormSubmit = (data) => {
    if (contracts.map((item) => item?.number).includes(chagedNumber)) {
      dispatch(changeFeedbackStateAction({
        error: true,
        feedback: 'Já temos um registro de um contrato com este número, não será possível registrá-lo',
        feedbackIsVisible: true
      }))
      return
    }
    const { number: contractNumber, valid_thru: validThru } = data
    dispatch(changeModalVisibility(false))
    dispatch(changeModalDataState({}))
    const newContract = {
      id: uuid(),
      number: contractNumber,
      valid_thru: new Date(validThru.split('/').reverse()),
      creation_date: new Date(new Date().setHours(0, 0, 0, 0)),
      employee: {
        name,
        cpf,
        email,
        address: {
          cep,
          address,
          number,
          complement,
          neighbourhood,
          city,
          state: sstate
        }
      }
    }
    dispatch(addNewContractAction([...contracts, newContract]))
  }
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Número"
              id="number"
              name="number"
              ref={register}
            />
            {errors?.number?.message && <Styled.HelperText>{errors?.number?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
          <Styled.FieldWrapper>
            <Controller
              placeholder="Validade do contrato (DD/MM/YYYY)"
              id="valid_thru"
              name="valid_thru"
              type="valid_thru"
              control={control}
              mask="99/99/9999"
              as={Styled.MaskedInput}
            />
            {errors?.valid_thru?.message && <Styled.HelperText>{errors?.valid_thru?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.ButtonsWrapper>
          <Styled.AcceptButton type="submit">Finalizar cadastro</Styled.AcceptButton>
          <Styled.DeclineButton type="button" onClick={goBack}>Voltar</Styled.DeclineButton>
        </Styled.ButtonsWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  )
}

export default RegisterContractContent
