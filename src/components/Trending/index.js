import Cookies from 'js-cookie'
import {Component} from 'react'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusList.loading})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)

    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))

      console.log(formattedData)

      /* return this.setState({
        // apiStatus: apiStatusList.success,
      }) */
    }
    /* return this.setState({apiStatus: apiStatusList.failure}) */
  }

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
                  <h1>Trending</h1>
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
