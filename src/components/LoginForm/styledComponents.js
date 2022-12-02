import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#383838' : '#ffffff')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginCardContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#000000' : '#ffffff')};
  width: 90%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 400px;
  box-shadow: ${props =>
    props.themeColor ? 'none' : '0px 4px 16px 0px #bfbfbf'};
  @media screen and (min-width: 768px) {
    padding: 60px;
    max-width: 500px;
  }
`
export const WebsiteLogo = styled.img`
  width: 100px;
  margin-bottom: 30px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-bottom: 40px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  color: ${props => (props.themeColor ? '#f9f9f9' : '#7e858e')};
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputCheckBox = styled.input`
  width: 18px;
  height: 18px;
`
export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
`

export const InputValue = styled.input`
  color: ${props => (props.themeColor ? '#ffffff' : '#616e7c')};
  padding: 13px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 2px;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.themeColor ? '#475569' : '#d7dfe9')};
  background-color: transparent;
  margin-bottom: 25px;
  outline: none;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  padding: 13px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`

export const ErrorText = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 10px;
`
