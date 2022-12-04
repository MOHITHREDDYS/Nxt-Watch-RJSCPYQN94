import Cookies from 'js-cookie'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'
import VideoPlayer from '../VideoPlayer'

import {
  SideNavbarContainer,
  MainContainer,
  HomeContainer,
  ProfileImage,
  VideoHeading,
  VideoDetailsContainer,
  VideoDetails,
  Details,
  DotIcon,
  VideoContainer,
  LikeButton,
  LikeIcon,
  LikeName,
  DetailsAndLikeContainer,
  ChannelName,
  ChannelContainer,
  Subscribers,
  ProfileContainer,
  ChannelDescription,
  VideoItemContainer,
  HorizontalLine,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

// import {Heading} from '../SideNavbar/styledComponents'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusList.loading})

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
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

      const formattedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      return this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusList.success,
      })
    }
    return this.setState({apiStatus: apiStatusList.failure})
  }

  onClickingRetryButton = () => {
    this.getTrendingVideos()
  }

  getSuccessView = () => {
    const {videoDetails} = this.state

    const {
      id,
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    const timeFromPublished = formatDistanceToNow(new Date(publishedAt))
    const forList = timeFromPublished.split(' ')
    const time = `${forList[1]} ${forList[2]} ago`

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            darkTheme,
            onClickingSaveButton,
            onClickingLikeButton,
            onClickingDislikeButton,
            savedVideosList,
            likedVideosList,
            dislikedVideosList,
          } = value

          const isSaved = savedVideosList.some(video => video.id === id)
          const isLiked = likedVideosList.some(video => video.id === id)
          const isDisliked = dislikedVideosList.some(video => video.id === id)

          const onClickingSave = () => {
            onClickingSaveButton(id, videoDetails)
          }

          const onClickingLike = () => {
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisliked: false,
            }))
            onClickingLikeButton(id, videoDetails)
          }

          const onClickingDislike = () => {
            this.setState(prevState => ({
              isDisliked: !prevState.isDisliked,
              isLiked: false,
            }))
            onClickingDislikeButton(id, videoDetails)
          }

          return (
            <VideoItemContainer>
              <VideoContainer>
                <VideoPlayer videoUrl={videoUrl} />
              </VideoContainer>
              <VideoDetailsContainer>
                <VideoHeading themeColor={darkTheme}>{title}</VideoHeading>
                <DetailsAndLikeContainer>
                  <VideoDetails>
                    <Details themeColor={darkTheme}>{viewCount}</Details>
                    <DotIcon themeColor={darkTheme}>
                      <BsDot />
                    </DotIcon>
                    <Details themeColor={darkTheme}>{time}</Details>
                  </VideoDetails>
                  <VideoDetails>
                    <LikeButton onClick={onClickingLike}>
                      <LikeIcon themeColor={darkTheme} isLiked={isLiked}>
                        <BiLike />
                      </LikeIcon>
                      <LikeName themeColor={darkTheme} isLiked={isLiked}>
                        Like
                      </LikeName>
                    </LikeButton>
                    <LikeButton onClick={onClickingDislike}>
                      <LikeIcon themeColor={darkTheme} isDisliked={isDisliked}>
                        <BiDislike />
                      </LikeIcon>
                      <LikeName themeColor={darkTheme} isDisliked={isDisliked}>
                        Dislike
                      </LikeName>
                    </LikeButton>
                    <LikeButton onClick={onClickingSave}>
                      <LikeIcon themeColor={darkTheme} isSaved={isSaved}>
                        <MdPlaylistAdd />
                      </LikeIcon>
                      <LikeName themeColor={darkTheme} isSaved={isSaved}>
                        {isSaved ? 'Saved' : 'Save'}
                      </LikeName>
                    </LikeButton>
                  </VideoDetails>
                </DetailsAndLikeContainer>
                <HorizontalLine themeColor={darkTheme} />
                <ProfileContainer>
                  <ProfileImage src={profileImageUrl} alt={name} />
                  <ChannelContainer>
                    <ChannelName themeColor={darkTheme}>{name}</ChannelName>
                    <Subscribers themeColor={darkTheme}>
                      {subscriberCount} subscribers
                    </Subscribers>
                    <ChannelDescription large themeColor={darkTheme}>
                      {description}
                    </ChannelDescription>
                  </ChannelContainer>
                </ProfileContainer>
                <ChannelDescription themeColor={darkTheme}>
                  {description}
                </ChannelDescription>
              </VideoDetailsContainer>
            </VideoItemContainer>
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
                <HomeContainer themeColor={darkTheme}>
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

export default VideoItemDetails
