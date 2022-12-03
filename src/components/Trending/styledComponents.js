import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const SideNavbarContainer = styled.div`
  display: flex;
  flex: 1;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#181818' : '#f9f9f9')};
  flex: 1;
  height: 100vh;
`
