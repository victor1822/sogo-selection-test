import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './components/Dashboard/Dashboard'
import Filters from './components/Filters/Filters'

const LeftMenu = () => {
  const { profileContentState } = useSelector((state) => state.profileState)
  return (
    <>
      {profileContentState === 'dashboard' && <Dashboard />}
      {profileContentState === 'filters' && <Filters />}
    </>
  )
}

export default LeftMenu
