import styled from 'styled-components'

export const DashboardWrapper = styled.div`
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
export const ContentMainTitle = styled.div`
  padding: 5px 0px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  font-family: poppins;
  color: purple;
  align-self: center;
`

export const ContentTitle = styled.div`
  padding: 5px 0px;
  text-align: left;
  font-size: 20px;
  font-family: poppins;
  cursor: pointer;
  color: black;
  align-self: center;
  text-align: center;
`

export const Subtitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  cursor: pointer;
  color: purple;
`

export const GraphWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  height: 35vh;
  max-height: 35vh;
  align-self: center;
  &:nth-child(2) {
    padding-bottom: 40px;
  }
`
export const Statistics = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  row-gap: 20px;
`
export const StatisticsContent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-self: center;
  align-items: center;
  column-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`
