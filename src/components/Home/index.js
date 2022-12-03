import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import PremiumPlan from '../PremiumPlan'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
  SearchMainContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  HomeItemsContainer,
  VideosListContainer,
  VideoContainer,
  VideoThumbnail,
  VideoProfileContainer,
  ProfileImage,
  VideoHeading,
  VideoDetailsContainer,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {apiStatus: apiStatusList.initial, searchInput: '', videosList: []}

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
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
        apiStatus: apiStatusList.success,
        videosList: formattedData,
      })
    }
    return this.setState({apiStatus: apiStatusList.failure})
  }

  onChangingSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  getSuccessView = () => {
    const {videosList} = this.state

    return (
      <VideosListContainer>
        {videosList.map(video => {
          const {
            id,
            publishedAt,
            thumbnailUrl,
            title,
            viewCount,
            channel,
          } = video
          const {name, profileImageUrl} = channel

          return (
            <VideoContainer key={id}>
              <VideoThumbnail src={thumbnailUrl} alt={title} />
              <VideoProfileContainer>
                <ProfileImage src={profileImageUrl} alt={name} />
                <VideoDetailsContainer>
                  <VideoHeading>{title}</VideoHeading>
                  <p>{name}</p>
                  <p>{viewCount}</p>
                  <p>{publishedAt}</p>
                </VideoDetailsContainer>
              </VideoProfileContainer>
            </VideoContainer>
          )
        })}
      </VideosListContainer>
    )
  }

  renderDesiredView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.loading:
        return this.getSuccessView()
      case apiStatusList.success:
        return this.getSuccessView()
      case apiStatusList.failure:
        return this.getSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, showPremiumPlan} = value

          return (
            <MainContainer>
              <Header />
              <SideNavbarContainer>
                <SideNavbar />
                <HomeContainer themeColor={darkTheme}>
                  {showPremiumPlan && <PremiumPlan />}
                  <HomeItemsContainer>
                    <SearchMainContainer>
                      <SearchContainer>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.onChangingSearchValue}
                        />
                        <SearchButton
                          type="button"
                          className="search-button"
                          onClick={this.onClickingSearchIcon}
                        >
                          <SearchIcon>
                            <AiOutlineSearch />
                          </SearchIcon>
                        </SearchButton>
                      </SearchContainer>
                    </SearchMainContainer>
                    {this.renderDesiredView()}
                  </HomeItemsContainer>
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
