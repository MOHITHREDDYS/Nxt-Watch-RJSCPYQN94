import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainContainer,
  Container,
  HamItemsContainer,
  ContactContainer,
  Heading,
  LogosContainer,
  Logo,
  Description,
} from './styledComponents'

import SideNavbarItems from '../SideNavbarItems'

const SideNavbar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, tabsList, changeActiveTab} = value

      const {match} = props
      const {url} = match

      return (
        <MainContainer>
          <Container themeColor={darkTheme}>
            <HamItemsContainer>
              {tabsList.map(eachTab => (
                <SideNavbarItems
                  key={eachTab.id}
                  tabDetails={eachTab}
                  changeActiveTab={changeActiveTab}
                  darkTheme={darkTheme}
                  url={url}
                />
              ))}
            </HamItemsContainer>
            <ContactContainer>
              <Heading themeColor={darkTheme}>CONTACT US</Heading>
              <LogosContainer>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </LogosContainer>
              <Description themeColor={darkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </ContactContainer>
          </Container>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(SideNavbar)
