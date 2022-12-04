import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
  HeadingAndIconContainer,
  TabIcon,
  TabHeading,
} from '../Trending/styledComponents'
import {
  VideosListContainer,
  VideoContainer,
  VideoThumbnail,
  VideoHeading,
  Details,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusList.initial, gamingList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  onClickingRetryButton = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusList.loading})

    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const formattedData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      return this.setState({
        gamingList: formattedData,
        apiStatus: apiStatusList.success,
      })
    }
    return this.setState({apiStatus: apiStatusList.failure})
  }

  getSuccessView = () => {
    const {gamingList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <VideosListContainer>
              {gamingList.map(video => {
                const {id, thumbnailUrl, title, viewCount} = video

                return (
                  <VideoContainer key={id}>
                    <Link to={`/videos/${id}`} className="link-item">
                      <VideoThumbnail
                        src={thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoHeading themeColor={darkTheme}>
                        {title}
                      </VideoHeading>
                      <Details>{viewCount} Watching Worldwide</Details>
                    </Link>
                  </VideoContainer>
                )
              })}
            </VideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  getDesiredView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.loading:
        return <LoadingView />
      case apiStatusList.success:
        return this.getSuccessView()
      case apiStatusList.failure:
        return (
          <FailureView onClickingRetryButton={this.onClickingRetryButton} />
        )

      default:
        return null
    }
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
                <HomeContainer themeColor={darkTheme} data-testid="gaming">
                  <HeadingAndIconContainer themeColor={darkTheme}>
                    <TabIcon themeColor={darkTheme}>
                      <SiYoutubegaming />
                    </TabIcon>
                    <TabHeading themeColor={darkTheme}>Gaming</TabHeading>
                  </HeadingAndIconContainer>
                  {this.getDesiredView()}
                </HomeContainer>
              </SideNavbarContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
