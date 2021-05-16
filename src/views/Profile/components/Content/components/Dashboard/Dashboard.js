import React from 'react'

import { useSelector } from 'react-redux'
import { isFuture } from 'date-fns'
import * as Styled from './Dashboard.styles'
import LineChart from './components/LineChart/LineChart'

import {
  isBeforeFifteenDaysFromNow,
  isBeforeThirtyDaysFromNow,
  isBeforeSevenDaysFromNow,
  ONE_DAY_IN_MILLIS,
  formatDate
} from '../../../../../../helpers/formatDate/formatDate'

const Dashboard = () => {
  const { contracts } = useSelector((state) => state.contractState)
  const today = new Date()
  const validContractsData = [
    {
      x: 'Hoje',
      y: contracts.reduce((acc, c) => ((formatDate(c.valid_thru) === formatDate(today))
        ? (acc + 1) : acc), 0)
    },
    {
      x: 'Em 7 dias',
      y: contracts.reduce((acc, c) => (isBeforeSevenDaysFromNow(c.valid_thru) ? (acc + 1) : acc), 0)
    },
    {
      x: 'Em 15 dias',
      y: contracts.reduce((acc, c) => (isBeforeFifteenDaysFromNow(c.valid_thru) ? (acc + 1) : acc), 0)
    },
    {
      x: 'Em 30 dias',
      y: contracts.reduce((acc, c) => (isBeforeThirtyDaysFromNow(c.valid_thru) ? (acc + 1) : acc), 0)
    },
    {
      x: 'Futuramente',
      y: contracts.reduce((acc, c) => (isFuture(c.valid_thru) ? (acc + 1) : acc), 0)
    }
  ]

  const timeContributionData = contracts.map((item) => {
    const miliSDistance = item.valid_thru?.getTime() - item.creation_date?.getTime()
    return {
      x: item.employee.name.split(' ')[0],
      y: miliSDistance / ONE_DAY_IN_MILLIS
    }
  })

  console.log(contracts)

  // const arr = ['1', '2', '3', '4']
  // const value = arr.reduce((acc, c) => (c >= 2 ? (acc + 1) : acc), 0)
  return (
    <Styled.DashboardWrapper>
      <Styled.Title>Dashboard</Styled.Title>
      <Styled.Content>
        <Styled.ContentMainTitle>
          Contratos à vencer
        </Styled.ContentMainTitle>
        <Styled.GraphWrapper>
          <LineChart
            data={[{
              id: 'chartData',
              color: 'hsl(299, 70%, 50%)',
              data: validContractsData
            }]}
          />
        </Styled.GraphWrapper>
        <Styled.ContentMainTitle>
          Tempo médio de serviço por contrato (em dias)
        </Styled.ContentMainTitle>
        <Styled.GraphWrapper>
          <LineChart data={[{
            id: 'chartData',
            color: 'hsl(299, 70%, 50%)',
            data: timeContributionData
          }]}
          />
        </Styled.GraphWrapper>
        <Styled.Statistics>
          <Styled.StatisticsContent>
            <Styled.ContentTitle>Número de contratos cadastrados:</Styled.ContentTitle>
            <Styled.Subtitle>
              {contracts.length}
            </Styled.Subtitle>
          </Styled.StatisticsContent>
          <Styled.StatisticsContent>
            <Styled.ContentTitle>Número de contratos à vencer:</Styled.ContentTitle>
            <Styled.Subtitle>
              {contracts.reduce((acc, c) => (isFuture(c.valid_thru) ? (acc + 1) : acc), 0)}
            </Styled.Subtitle>
          </Styled.StatisticsContent>
        </Styled.Statistics>
      </Styled.Content>
    </Styled.DashboardWrapper>
  )
}

export default Dashboard
