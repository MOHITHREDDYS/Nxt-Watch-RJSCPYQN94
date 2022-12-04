import Header from '../Header'
import SideNavbar from '../SideNavbar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainContainer,
  SideNavbarContainer,
  HomeContainer,
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsParagraph,
} from '../Home/styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <MainContainer>
          <Header />
          <SideNavbarContainer>
            <SideNavbar />
            <HomeContainer themeColor={darkTheme}>
              <NoResultsContainer>
                <NoResultsImage
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NoResultsHeading themeColor={darkTheme}>
                  Page Not Found
                </NoResultsHeading>
                <NoResultsParagraph>
                  We are sorry, the page you requested could not be found.
                </NoResultsParagraph>
              </NoResultsContainer>
            </HomeContainer>
          </SideNavbarContainer>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
