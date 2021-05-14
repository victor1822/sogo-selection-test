import React from 'react'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Content from './components/Content/Content'

import * as Styled from './Profile.styled'

const Profile = () => (
  <Styled.Wrapper>
    <LeftMenu />
    <Content />
  </Styled.Wrapper>
)

export default Profile
