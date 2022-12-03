import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'

import {
  NavbarMainContainer,
  NavbarContainer,
  LogoImage,
  NavItemsContainer,
  NavItem,
  ThemeButton,
  ProfileImage,
  HamBurgerOrProfileItem,
  LogoutButton,
} from './styledComponents'
import './index.css'

import HamBurgerPopup from '../HamburgerPopup'
import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, toggleTheme} = value

      const onClickingThemeIcon = () => {
        toggleTheme()
      }

      const onClickingLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/login')
      }

      return (
        <NavbarMainContainer themeColor={darkTheme}>
          <NavbarContainer>
            <Link to="/">
              <LogoImage
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="logo"
              />
            </Link>
            <NavItemsContainer>
              <NavItem>
                <ThemeButton
                  themeColor={darkTheme}
                  onClick={onClickingThemeIcon}
                >
                  {darkTheme ? (
                    <FiSun className="sun-icon" />
                  ) : (
                    <FaMoon className="moon-icon" />
                  )}
                </ThemeButton>
              </NavItem>
              <HamBurgerOrProfileItem mobile>
                <HamBurgerPopup />
              </HamBurgerOrProfileItem>
              <HamBurgerOrProfileItem>
                <ThemeButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ThemeButton>
              </HamBurgerOrProfileItem>
              <HamBurgerOrProfileItem mobile>
                <ThemeButton themeColor={darkTheme} onClick={onClickingLogout}>
                  <FiLogOut className="logout-icon" />
                </ThemeButton>
              </HamBurgerOrProfileItem>
              <HamBurgerOrProfileItem>
                <LogoutButton
                  type="button"
                  themeColor={darkTheme}
                  onClick={onClickingLogout}
                >
                  Logout
                </LogoutButton>
              </HamBurgerOrProfileItem>
            </NavItemsContainer>
          </NavbarContainer>
        </NavbarMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
