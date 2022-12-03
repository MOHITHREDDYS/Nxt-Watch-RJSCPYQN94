import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 25%;
  max-width: 300px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Container = styled.div`
  background-color: ${props => (props.themeColor ? '#231f20' : '#ffffff')};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HamItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`

export const ContactContainer = styled.div`
  padding: 20px;
`
export const Heading = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
  font-weight: bold;
  font-size: 16px;
  font-family: 'Roboto';
`
export const LogosContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const Logo = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const Description = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
  font-weight: 500;
`
