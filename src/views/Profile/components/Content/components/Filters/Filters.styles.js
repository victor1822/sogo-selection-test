import styled, { css } from 'styled-components'

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(min(30%,150px) + 90px);
  width: 100%;
  padding-top: 40px;
`
export const Title = styled.h1`
  padding: 5px 0px;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  font-family: poppins;
  cursor: pointer;
  color: purple;
  padding-bottom: 20px;
  }
`
export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  border-radius: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-bottom: 30px;
  padding-top: 50px;
`
export const ContentTitle = styled.div`
  display: flex;
  column-gap: 20px;
  padding-bottom: 5px;
  text-align: left;
  font-size: 20px;
  font-family: poppins;
  color: purple;
  align-self: center;
  align-items: center;

  `

export const Arrow = styled.button`
    outline: none;
    border: none;
    background-color: purple;
    width: 30px;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 0.6;
    }
    &:active {
      opacity: 1;
    }
    ${(props) => !props.active && css`
      background-color: whitesmoke;
      border: none;
    `}
`

export const FilterOptions = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
  padding: 20px 40px;
`
export const FilterOption = styled.h6`
  cursor: pointer;
  padding: 10px 15px;
  text-align: left;
  font-size: 16px;
  border-radius: 10px;
  font-family: poppins;
  cursor: pointer;
  color: white;
  background-color: purple;
  cursor: pointer;
  ${(props) => !props.active && css`
    background-color: lightGray;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchResults = styled(FilterOptions)`
  background-color: transparent;
`

export const SearchItem = styled(FilterOption)`
  &:hover {
    background-color: purple;
  }
  &:actitve {
    opacity: 0.6;
  }
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid purple;
  color: purple;
  ::placeholder {
    color: purple;
  }
  min-height: 35px;
`
export const Button = styled.button`
  display: flex;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid yellowgreen;
  background-color: whitesmoke;
  color: yellowgreen;
  &:hover {
    background-color: yellowgreen;
    color: white;
  }
  min-height: 35px;
`
export const ReconsiderButton = styled(Button)`
  height: 45px;
  width: 100%;
  max-width: 250px;
  align-self: center;
`
export const HelperText = styled.small`
  display: flex;
  font-family: poppins;
  color: tomato;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin: 0 auto;
`
export const Result = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`
export const ContractLabel = styled.h6`
  padding-bottom: 5px;
  text-align: left !important;
  font-size: 18px;
  font-family: poppins;
  color: black;
  width: initial;
  align-self: flex-start;
  padding-left: 50px;
  padding-bottom: 10px;
  font-weight: bold;
`
export const ContractContent = styled.div`
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-bottom: 15px;
  max-width: 600px;
  h6 {
    color: gray;
    font-family: roboto;
    b {
      font-weight: bold;
      color: black;
    }
  }
`
export const Contract = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: flex-start;
  margin-top: 30px;
`
export const ContractItem = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`
