import React from 'react'

import * as Styled from './Dashboard.styles'

const Dashboard = () => {
  const title = 'Dashboard'
  return (
    <Styled.DashboardWrapper>
      <Styled.Title>{title}</Styled.Title>
    </Styled.DashboardWrapper>
  )
}

export default Dashboard
