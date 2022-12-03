import {Component} from 'react'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Home extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <MainContainer>
              <Header />
              <SideNavbarContainer>
                <SideNavbar />
                <HomeContainer themeColor={darkTheme}>
                  <h1>Saved Videos</h1>
                </HomeContainer>
              </SideNavbarContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
