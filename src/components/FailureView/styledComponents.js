import styled from 'styled-components'

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex: 1;
`

export const NoResultsImage = styled.img`
  width: 60%;
  min-width: 250px;
  max-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: ${props => (props.save ? 400 : 300)}px;
  }
`
export const NoResultsHeading = styled.h1`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto';
  margin-bottom: 10px;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const NoResultsParagraph = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  font-family: 'Roboto';
  margin-top: 0px;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  padding: 10px 30px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`
