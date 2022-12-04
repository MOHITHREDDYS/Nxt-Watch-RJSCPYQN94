import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.themeColor ? '#383838' : '#ffffff')};
  padding: 20px 30px;
  border-radius: 15px;
  min-width: 250px;
  max-width: 400px;
  opacity: 1;
`

export const LogoutHeading = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  font-family: 'Roboto';
  margin: 10px 20px;
  font-size: 15px;
  border: none;
  padding: 12px 20px;
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  color: ${props => (props.cancel ? '#94a3b8' : '#ffffff')};
  border: 1px solid ${props => (props.cancel ? '#94a3b8' : '#3b82f6')};
  font-weight: 500;
  cursor: pointer;
`
