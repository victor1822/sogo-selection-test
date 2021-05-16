import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
`

export const CloseButton = styled.div`
  padding: 5px 0px;
  text-align: left;
  font-size: 20px;
  font-family: poppins;
  cursor: pointer;
  color: black;
  align-self: center;
  text-align: center;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  column-gap: 20px;
`

export const AcceptButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background-color: purple;
  color: white;
  border: none;
  font-family: poppins;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

export const DeclineButton = styled(AcceptButton)`
  border: 1px solid purple;
  background-color: white;
  color: purple;
`
export const Title = styled.div`
  padding: 5px 0px;
  text-align: left;
  font-size: 20px;
  width: 100%;
  font-family: poppins;
  cursor: pointer;
  color: black;
  align-self: center;
  padding-bottom: 20px;
`
export const HelperText = styled.small`
  color: tomato;
  font-family: poppins;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  flex: none;
  order: 2;
  align-self: flex-start;
  flex-grow: 0;
  padding-left: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const FieldsPairWrapper = styled.div`
  display: flex;
  row-gap: 20px;
  column-gap: 15px;
  @media(max-width: 1024px) {
    flex-direction: column;
  }
`
export const Input = styled.input`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 10px;
  border-width: 1px;
  outline: none;
`
export const MaskedInput = styled(InputMask)`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 10px;
  border-width: 1px;
  outline: none;
`
