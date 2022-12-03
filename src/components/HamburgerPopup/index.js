import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

import {ThemeButton} from '../Header/styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
import HamburgerPopupItems from '../HamburgerPopupItems'
import './index.css'
import {PopupContainer, HamItemsContainer, CloseIcon} from './styledComponents'

/* const tabsList = [
  {
    id: 1,
    displayText: 'Home',
    displayIcon: <AiFillHome className="ham-icons" />,
    isActive: 'yes',
    path: '/',
  },
  {
    id: 2,
    displayText: 'Trending',
    displayIcon: <HiFire className="ham-icons" />,
    isActive: 'no',
    path: '/trending',
  },
  {
    id: 3,
    displayText: 'Gaming',
    displayIcon: <SiYoutubegaming className="ham-icons" />,
    isActive: 'no',
    path: '/gaming',
  },
  {
    id: 4,
    displayText: 'Saved Videos',
    displayIcon: <MdPlaylistAdd className="ham-icons" />,
    isActive: 'no',
    path: '/saved-videos',
  },
] */

const HamburgerPopup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, tabsList, changeActiveTab} = value

      return (
        <Popup
          modal
          trigger={
            <ThemeButton themeColor={darkTheme}>
              <GiHamburgerMenu className="hamburger-icon" />
            </ThemeButton>
          }
          className="popup-content"
        >
          {close => (
            <PopupContainer themeColor={darkTheme}>
              <CloseIcon themeColor={darkTheme}>
                <MdClose className="close-icon" onClick={() => close()} />
              </CloseIcon>
              <HamItemsContainer>
                {tabsList.map(eachTab => (
                  <HamburgerPopupItems
                    key={eachTab.id}
                    tabDetails={eachTab}
                    changeActiveTab={changeActiveTab}
                    darkTheme={darkTheme}
                  />
                ))}
              </HamItemsContainer>
            </PopupContainer>
          )}
        </Popup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HamburgerPopup
