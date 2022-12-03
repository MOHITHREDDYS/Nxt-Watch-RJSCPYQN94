import styled from 'styled-components'

export const PopupContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#231f20' : '#ffffff')};
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

export const CloseIcon = styled.div`
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  align-self: flex-end;
`

export const IconNameButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 80px;
  color: ${props => {
    if (props.active === 'yes') {
      return '#ff0000'
    }
    if (props.themeColor) {
      return '#909090'
    }
    return '#383838'
  }};
  background-color: ${props => {
    const {active, themeColor} = props
    if (active === 'yes') {
      if (themeColor) {
        return '#313131'
      }
      return '#f1f5f9'
    }
    if (themeColor) {
      return '#231f20'
    }
    return '#ffffff'
  }};

  /* ${props => (props.active === 'yes' ? '#f1f5f9' : '#ffffff')}; */
`

export const HamItems = styled.p`
  font-size: 18px;
  width: 120px;
  text-align: left;
  margin-left: 15px;
  color: ${props => (props.themeColor ? '#ffffff' : '#383838')};
  text-decoration: none;
  font-weight: ${props => (props.active === 'yes' ? 'bold' : 400)};
`
