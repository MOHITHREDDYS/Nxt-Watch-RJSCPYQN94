import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HamBurgerOrProfileItem,
  LogoutButton,
  ThemeButton,
} from '../Header/styledComponents'
import {
  PopupContainer,
  CardContainer,
  LogoutHeading,
  ButtonsContainer,
  Button,
} from './styledComponents'
import './index.css'

const LogoutButtonPopup = props => {
  const {onClickingLogout} = props

  const onClickingLogoutButton = () => {
    onClickingLogout()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Popup
            modal
            trigger={
              <div>
                <HamBurgerOrProfileItem mobile>
                  <ThemeButton themeColor={darkTheme}>
                    <FiLogOut className="logout-icon" />
                  </ThemeButton>
                </HamBurgerOrProfileItem>
                <HamBurgerOrProfileItem>
                  <LogoutButton type="button" themeColor={darkTheme}>
                    Logout
                  </LogoutButton>
                </HamBurgerOrProfileItem>
              </div>
            }
            className="popup-content"
          >
            {close => (
              <PopupContainer themeColor={darkTheme}>
                <CardContainer themeColor={darkTheme}>
                  <LogoutHeading themeColor={darkTheme}>
                    Are you sure, you want to Logout
                  </LogoutHeading>
                  <ButtonsContainer>
                    <Button type="button" cancel onClick={() => close()}>
                      Cancel
                    </Button>
                    <Button type="button" onClick={onClickingLogoutButton}>
                      Confirm
                    </Button>
                  </ButtonsContainer>
                </CardContainer>
              </PopupContainer>
            )}
          </Popup>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default LogoutButtonPopup
