import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 1%;
  }
`

export const Wrapper = styled.div`
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${(props) => (props.error ? 'red' : '#ffc40c')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  padding: 15px 50px 10px 50px;
  h4 {
    max-width: 300px;
    color:  ${(props) => (props.error ? '#ffc40c' : 'red')};
    font-weight: 500;
    padding: 5px 0px;
    text-align: left;
    font-size: 14px;
    font-family: poppins;
    cursor: pointer;
    align-self: center;
    text-align: center;
  }
  box-sizing: border-box;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 30;
    display: flex;
    width: 100%;
    height: 8px;
    content: '';
    background-color: ${(props) => (props.error ? '#ffc40c' : 'red')};
    animation: ${fadeIn} 4s ease-out;
  }
`
