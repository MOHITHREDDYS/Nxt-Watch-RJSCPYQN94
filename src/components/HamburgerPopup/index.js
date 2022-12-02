import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose, MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {ThemeButton} from '../Header/styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  PopupContainer,
  HamItemsContainer,
  IconNameButton,
  HamItems,
} from './styledComponents'

const tabsList = [
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
]

class HamburgerPopup extends Component {
  state = {tabs: tabsList}

  onClickingHamLink = () => {
    console.log(key)
  }

  render() {
    const {tabs} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

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
                <PopupContainer>
                  <MdClose className="close-icon" onClick={() => close()} />
                  <HamItemsContainer>
                    {tabs.map(eachTab => (
                      <Link
                        to={eachTab.path}
                        className="ham-links"
                        key={eachTab.id}
                        onClick={this.onClickingHamLink}
                      >
                        <IconNameButton type="button" active={eachTab.isActive}>
                          {eachTab.displayIcon}
                          <HamItems active={eachTab.isActive}>
                            {eachTab.displayText}
                          </HamItems>
                        </IconNameButton>
                      </Link>
                    ))}
                  </HamItemsContainer>
                </PopupContainer>
              )}
            </Popup>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HamburgerPopup
