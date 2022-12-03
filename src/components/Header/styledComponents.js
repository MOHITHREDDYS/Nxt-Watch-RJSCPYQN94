import styled from 'styled-components'

export const NavbarMainContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.themeColor ? '#231f20' : '#ffffff')};
  height: 10vh;
`
export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`
export const LogoImage = styled.img`
  width: 100px;
`
export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
`
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => (props.themeColor ? '#ffffff' : '#212121')};
  // color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
`
export const HamBurgerOrProfileItem = styled(NavItem)`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  color: ${props => (props.themeColor ? '#ffffff' : '#212121')};
  @media screen and (min-width: 768px) {
    display: ${props => (props.mobile ? 'none' : 'flex')};
  }
`

export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.themeColor ? '#ffffff' : '#3b82f6')};
  font-size: 12px;
  padding: 5px 10px;
  font-family: 'Roboto';
  border: 1px solid ${props => (props.themeColor ? '#ffffff' : '#3b82f6')};
  font-weight: 500;
  margin-left: 10px;
`
