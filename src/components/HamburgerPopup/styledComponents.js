import styled from 'styled-components'

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`

export const HamItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const IconNameButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 80px;
  color: ${props => (props.active === 'yes' ? '#ff0000' : '#383838')};
  background-color: ${props =>
    props.active === 'yes' ? '#f1f5f9' : '#ffffff'};
`

export const HamItems = styled.p`
  font-size: 18px;
  width: 120px;
  text-align: left;
  margin-left: 15px;
  color: #383838;
  text-decoration: none;
  font-weight: ${props => (props.active === 'yes' ? 'bold' : 400)};
`
