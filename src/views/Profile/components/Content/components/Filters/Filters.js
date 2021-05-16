/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isPast, isFuture } from 'date-fns'
import {
  formatDate,
  isBeforeFifteenDaysFromNow,
  isBeforeSevenDaysFromNow,
  isBeforeThirtyDaysFromNow
} from '../../../../../../helpers/formatDate/formatDate'

import * as Styled from './Filters.styles'
import { changeFeedbackStateAction } from '../../../../../../ducks/actions/feedback/feedback'

const Filters = () => {
  const filterOptions = [
    {
      title: 'Vencem Futuramente',
      value: 'isFuture'
    },
    {
      title: 'Vence em 30 dias',
      value: 'thirtyDaysFromNow'
    },
    {
      title: 'Vence em 15 dias',
      value: 'fifteenDaysFromNow'
    },
    {
      title: 'Vence em 7 dias',
      value: 'sevenDaysFromNow'
    },
    {
      title: 'Vencem hoje',
      value: 'today'
    },
    {
      title: 'Já Venceram',
      value: 'isPast'
    }
  ]
  const [choosenFilter, setChoosenFilter] = useState('isFuture')
  const { contracts } = useSelector((state) => state.contractState)
  const [typedText, setTypedText] = useState('')
  const searchResults = contracts.filter((contract) => {
    if (choosenFilter === 'today') return formatDate(new Date()) === formatDate(contract?.valid_thru)
    if (choosenFilter === 'sevenDaysFromNow') {
      return isFuture(contract?.valid_thru)
      && isBeforeSevenDaysFromNow(contract?.valid_thru)
    }
    if (choosenFilter === 'fifteenDaysFromNow') {
      return isFuture(contract?.valid_thru)
      && isBeforeFifteenDaysFromNow(contract?.valid_thru)
    }
    if (choosenFilter === 'thirtyDaysFromNow') {
      return isFuture(contract?.valid_thru)
      && isBeforeThirtyDaysFromNow(contract?.valid_thru)
    }
    if (choosenFilter === 'isFuture') return isFuture(contract?.valid_thru)
    return isPast(contract?.valid_thru)
  }).filter((contract) => contract?.employee?.name.includes(typedText))
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [selectedContractIndex, setSelectedContractIndex] = useState(-1)
  const dispatch = useDispatch()
  useEffect(() => {
    if (searchResults.length) {
      dispatch(changeFeedbackStateAction({
        error: false,
        feedback: 'Não temos registros conforme sua busca',
        feedbackIsVisible: true
      }))
    } else {
      dispatch(changeFeedbackStateAction({
        error: false,
        feedback: '',
        feedbackIsVisible: false
      }))
    }
  }, [dispatch, searchResults.length])
  return (
    <Styled.FiltersWrapper>
      <Styled.Title>Seus contratos</Styled.Title>
      <Styled.Content>
        {!showSearchResults && (
          <>
            <Styled.ContentTitle>Busque pelos seus contratos que:</Styled.ContentTitle>
            <Styled.FilterOptions>
              {filterOptions.map((option, i) => (
                <Styled.FilterOption
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${option.title}${i}`}
                  onClick={() => setChoosenFilter(option.value)}
                  active={choosenFilter === option.value}
                >
                  {option.title}
                </Styled.FilterOption>
              ))}
              <Styled.Input
                placeholder="Busque por nome do colaborador"
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
              />
              <Styled.Button onClick={() => setShowSearchResults(true)}>Buscar</Styled.Button>
            </Styled.FilterOptions>
          </>
        )}
        {showSearchResults && selectedContractIndex < 0 && (
          <>
            <Styled.ContentTitle>
              Resultados da sua busca:
            </Styled.ContentTitle>
            {searchResults.length > 0 ? (
              <Styled.SearchResults>
                {searchResults.map((option, i) => (
                  <Styled.SearchItem
                    key={option?.id}
                    onClick={() => setSelectedContractIndex(i)}
                  >
                    {option?.employee?.name}
                  </Styled.SearchItem>
                ))}
              </Styled.SearchResults>
            ) : (
              <Styled.SearchResults>
                <Styled.HelperText>Não há registros de acordo com a sua busca</Styled.HelperText>
              </Styled.SearchResults>
            )}
            <Styled.ReconsiderButton onClick={() => setShowSearchResults(false)}>
              Mudar filtros da busca
            </Styled.ReconsiderButton>
          </>
        )}
        {showSearchResults && selectedContractIndex >= 0 && (
          <>
            <Styled.Result>
              <Styled.ContentTitle>
                <Styled.Arrow
                  active={selectedContractIndex !== 0}
                  onClick={selectedContractIndex !== 0
                    ? () => setSelectedContractIndex(selectedContractIndex - 1)
                    : () => {}}
                  type="button"
                >
                  {'<'}

                </Styled.Arrow>
                {searchResults[selectedContractIndex]?.employee?.name}
                <Styled.Arrow
                  active={selectedContractIndex !== (searchResults.length - 1)}
                  onClick={selectedContractIndex !== (searchResults.length - 1)
                    ? () => setSelectedContractIndex(selectedContractIndex + 1)
                    : () => {}}
                  type="button"
                >
                  {'>'}

                </Styled.Arrow>
              </Styled.ContentTitle>
              <Styled.Contract>
                <Styled.ContractItem>
                  <Styled.ContractLabel>
                    Dados principais
                  </Styled.ContractLabel>
                  <Styled.ContractContent>
                    <h6>
                      <b>Nome completo:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.name}
                    </h6>
                    <h6>
                      <b>E-mail:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.email}
                    </h6>
                    <h6>
                      <b>CPF:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.email}
                    </h6>
                  </Styled.ContractContent>
                </Styled.ContractItem>
                <Styled.ContractItem>
                  <Styled.ContractLabel>
                    Endereço
                  </Styled.ContractLabel>
                  <Styled.ContractContent>
                    <h6>
                      <b>CEP:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.cep}
                    </h6>
                    <h6>
                      <b>Rua/Avenida:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.address}
                    </h6>
                    <h6>
                      <b>Número:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.number}
                    </h6>
                    <h6>
                      <b>Complemento:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.complement}
                    </h6>
                    <h6>
                      <b>Bairro:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.neighbourhood}
                    </h6>
                    <h6>
                      <b>Cidade:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.city}
                    </h6>
                    <h6>
                      <b>Estado:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.employee?.address?.state}
                    </h6>
                  </Styled.ContractContent>
                </Styled.ContractItem>
                <Styled.ContractItem>
                  <Styled.ContractLabel>
                    Informações de contrato
                  </Styled.ContractLabel>
                  <Styled.ContractContent>
                    <h6>
                      <b>Número:</b>
                      {' '}
                      {searchResults[selectedContractIndex]?.number}
                    </h6>
                    <h6>
                      <b>Data de criação:</b>
                      {' '}
                      {formatDate(searchResults[selectedContractIndex]?.creation_date)}
                    </h6>
                    <h6>
                      <b>Data de vencimento:</b>
                      {' '}
                      {formatDate(searchResults[selectedContractIndex]?.valid_thru)}
                    </h6>
                  </Styled.ContractContent>
                </Styled.ContractItem>
              </Styled.Contract>
              <Styled.ReconsiderButton onClick={() => setSelectedContractIndex(-1)}>
                Voltar
              </Styled.ReconsiderButton>
            </Styled.Result>
          </>
        )}
      </Styled.Content>
    </Styled.FiltersWrapper>
  )
}

export default Filters
