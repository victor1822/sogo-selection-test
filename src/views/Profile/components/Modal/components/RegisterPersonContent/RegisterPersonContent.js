import React, { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as Styled from './RegisterPersonContent.styles'

import getAddressByCep from '../../../../../../services/getAddressByCep/getAddressByCep'

import validationSchema from './validationSchema'
import {
  changeModalContentState,
  changeModalDataState,
  changeModalVisibility
} from '../../../../../../ducks/actions/modal/modal'
import { changeFeedbackStateAction } from '../../../../../../ducks/actions/feedback/feedback'

const RegisterPersonContent = () => {
  const dispatch = useDispatch()
  const title = 'Cadastre aqui os dados do colaborador do novo contrato'
  const { modalState: { modalData: defaultValues }, contractState: { contracts } } = useSelector((state) => state)
  const {
    register, handleSubmit, errors, control, watch, setValue
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues
  })
  const changedName = watch('name')
  useEffect(() => {
    if (contracts.map((item) => item?.employee?.name).includes(changedName)) {
      dispatch(changeFeedbackStateAction({
        error: false,
        feedback: 'Já temos um registro de um usuário com este nome',
        feedbackIsVisible: true
      }))
    }
  }, [changedName])
  const changedEmail = watch('email')
  useEffect(() => {
    if (contracts.map((item) => item?.employee?.email).includes(changedEmail)) {
      dispatch(changeFeedbackStateAction({
        error: false,
        feedback: 'Já temos um registro de um usuário com este email',
        feedbackIsVisible: true
      }))
    }
  }, [changedEmail])
  const changedCPF = watch('cpf')
  useEffect(() => {
    if (contracts.map((item) => item?.employee?.cpf).includes(changedCPF)) {
      dispatch(changeFeedbackStateAction({
        error: false,
        feedback: 'Já temos um registro de um usuário com este CPF',
        feedbackIsVisible: true
      }))
    }
  }, [changedCPF])
  const changedCep = watch('cep')
  const [newCepData, setNewCepData] = useState(undefined)
  useEffect(() => {
    const cepHasChanged = changedCep?.length === 9
  && !changedCep.includes('_')

    const fetchCep = async () => {
      try {
        const res = await getAddressByCep(changedCep)
        setNewCepData({ ...res })
      } catch (err) {
        setNewCepData(undefined)
      }
    }

    if (cepHasChanged) {
      fetchCep()
    }
  }, [changedCep])
  useEffect(() => {
    if (newCepData) {
      setValue('address', newCepData?.logradouro, { shouldValidate: true })
      setValue('city', newCepData?.localidade, { shouldValidate: true })
      setValue('state', newCepData?.uf, { shouldValidate: true })
      setValue('neighbourhood', newCepData?.localidade, { shouldValidate: true })
    }
  }, [newCepData])
  const onFormSubmit = (data) => {
    dispatch(changeModalDataState(data))
    dispatch(changeModalContentState('contract-register'))
  }
  const decline = () => {
    dispatch(changeModalVisibility(false))
    dispatch(changeModalDataState({}))
  }
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onFormSubmit)}>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Nome"
              id="name"
              name="name"
              ref={register}
            />
            {errors?.name?.message && <Styled.HelperText>{errors?.name?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              ref={register}
            />
            {errors?.email?.message && <Styled.HelperText>{errors?.email?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Controller
              placeholder="CPF"
              id="cpf"
              name="cpf"
              control={control}
              mask="999.999.999-99"
              defaultValue=""
              as={Styled.MaskedInput}
            />
            {errors?.cpf?.message && <Styled.HelperText>{errors?.cpf?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
          <Styled.FieldWrapper>
            <Controller
              placeholder="CEP"
              id="cep"
              defaultValue=""
              name="cep"
              control={control}
              mask="99999-999"
              as={Styled.MaskedInput}
            />
            {errors?.cep?.message && <Styled.HelperText>{errors?.cep?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Rua"
              id="address"
              name="address"
              ref={register}
            />
            {errors?.address?.message && <Styled.HelperText>{errors?.address?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Número"
              id="number"
              name="number"
              ref={register}
            />
            {errors?.number?.message && <Styled.HelperText>{errors?.number?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Bairro"
              id="neighbourhood"
              name="neighbourhood"
              ref={register}
            />
            {errors?.neighbourhood?.message && <Styled.HelperText>{errors?.neighbourhood?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
          <Styled.FieldWrapper>
            <Styled.Input
              placeholder="Cidade"
              id="city"
              name="city"
              ref={register}
            />
            {errors?.city?.message && <Styled.HelperText>{errors?.city?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.FieldsPairWrapper>
          <Styled.FieldWrapper>
            <Controller
              placeholder="Estado (UF)"
              id="state"
              name="state"
              defaultValue=""
              control={control}
              mask="aa"
              as={Styled.MaskedInput}
            />
            {errors?.state?.message && <Styled.HelperText>{errors?.state?.message}</Styled.HelperText>}
          </Styled.FieldWrapper>
        </Styled.FieldsPairWrapper>
        <Styled.ButtonsWrapper>
          <Styled.AcceptButton type="submit">Continuar cadastro</Styled.AcceptButton>
          <Styled.DeclineButton type="button" onClick={decline}>Desistir</Styled.DeclineButton>
        </Styled.ButtonsWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  )
}

export default RegisterPersonContent
