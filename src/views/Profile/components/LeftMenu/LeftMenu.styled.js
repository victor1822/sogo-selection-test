import styled, { css } from 'styled-components'

export const LeftMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 30%;
  max-width: 150px;
  box-sizing: border-box;
  padding: 30px 20px;
  background-color: white;
  box-shadow: 5px 3px 5px rgba(1,1,1,0.2);
  row-gap: 10px;
`
export const MenuOption = styled.h1`
  padding: 5px 0px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  font-family: poppins;
  cursor: pointer;
  color: purple;
  ${(props) => !props.active && css`
  color: gray;
    &:hover {
      color: darkgray;
    }
    &:active {
      color: black;
    }
  `}
`
