import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
  HeadingAndIconContainer,
  TabHeading,
  TabIcon,
  VideosListContainer,
  VideoContainer,
  VideoThumbnail,
  VideoProfileContainer,
  ProfileImage,
  VideoHeading,
  VideoDetailsContainer,
  VideoDetails,
  Details,
  DotIcon,
  PublishedViewContainer,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
// import {Heading} from '../SideNavbar/styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {apiStatus: apiStatusList.initial, trendingList: []}

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

      return this.setState({
        trendingList: formattedData,
        apiStatus: apiStatusList.success,
      })
    }
    return this.setState({apiStatus: apiStatusList.failure})
  }

  onClickingRetryButton = () => {
    this.getTrendingVideos()
  }

  getSuccessView = () => {
    const {trendingList} = this.state
    return trendingList.length > 0 ? (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <VideosListContainer>
              {trendingList.map(video => {
                const {
                  id,
                  publishedAt,
                  thumbnailUrl,
                  title,
                  viewCount,
                  channel,
                } = video
                const {name, profileImageUrl} = channel

                const timeFromPublished = formatDistanceToNow(
                  new Date(publishedAt),
                )
                const forList = timeFromPublished.split(' ')
                const time = `${forList[1]} ${forList[2]} ago`

                return (
                  <VideoContainer key={id}>
                    <Link to={`/videos/${id}`} className="trending-link-item">
                      <VideoThumbnail src={thumbnailUrl} alt={title} />
                      <VideoProfileContainer>
                        <ProfileImage src={profileImageUrl} alt={name} />
                        <VideoDetailsContainer>
                          <VideoHeading themeColor={darkTheme}>
                            {title}
                          </VideoHeading>
                          <VideoDetails>
                            <Details small>{name}</Details>
                            <PublishedViewContainer>
                              <DotIcon extraSmall>
                                <BsDot />
                              </DotIcon>
                              <Details>{viewCount}</Details>
                              <DotIcon>
                                <BsDot />
                              </DotIcon>
                              <Details>{time}</Details>
                            </PublishedViewContainer>
                          </VideoDetails>
                        </VideoDetailsContainer>
                      </VideoProfileContainer>
                    </Link>
                  </VideoContainer>
                )
              })}
            </VideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    ) : null
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
                <HomeContainer themeColor={darkTheme}>
                  <HeadingAndIconContainer themeColor={darkTheme}>
                    <TabIcon themeColor={darkTheme}>
                      <HiFire />
                    </TabIcon>
                    <TabHeading themeColor={darkTheme}>Trending</TabHeading>
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

export default Home
