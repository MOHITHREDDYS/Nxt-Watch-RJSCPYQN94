import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import PremiumPlan from '../PremiumPlan'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import './index.css'

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
  VideoDetails,
  Details,
  DotIcon,
  PublishedViewContainer,
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsParagraph,
  RetryButton,
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
    this.setState({apiStatus: apiStatusList.loading})

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickingSearchIcon = () => {
    this.getHomeVideos()
  }

  onClickingRetryButton = () => {
    this.getHomeVideos()
  }

  getSuccessView = () => {
    const {videosList} = this.state
    return videosList.length > 0 ? (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

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

                const timeFromPublished = formatDistanceToNow(
                  new Date(publishedAt),
                )
                const forList = timeFromPublished.split(' ')
                const time = `${forList[1]} ${forList[2]} ago`

                return (
                  <VideoContainer key={id}>
                    <Link to={`/videos/${id}`} className="link-item">
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
    ) : (
      this.getNoResultsView()
    )
  }

  getNoResultsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsHeading themeColor={darkTheme}>
              No Search results found
            </NoResultsHeading>
            <NoResultsParagraph>
              Try different key words or remove search filter
            </NoResultsParagraph>
            <RetryButton type="button" onClick={this.onClickingRetryButton}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderDesiredView = () => {
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
                      <SearchContainer themeColor={darkTheme}>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.onChangingSearchValue}
                          themeColor={darkTheme}
                        />
                        <SearchButton
                          type="button"
                          onClick={this.onClickingSearchIcon}
                          themeColor={darkTheme}
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
