import styled from 'styled-components'

export const PlanMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`
export const PlanDescription = styled.div`
  margin-right: 30px;
  padding-top: 10px;
`

export const PlanLogo = styled.img`
  width: 150px;
`
export const Description = styled.p`
  color: #1e393b;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Roboto';
`
export const Button = styled.button`
  color: #0f0f0f;
  font-size: 16px;
  font-family: 'Roboto';
  border: 1px solid #0f0f0f;
  padding: 5px 10px;
  background-color: transparent;
  font-weight: 500;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  width: 20px;
  height: 20px;
  padding: 0px;
  cursor: pointer;
`
