import {Link} from 'react-router-dom'

import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

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

import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsParagraph,
} from '../Home/styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'
// import {Heading} from '../SideNavbar/styledComponents'

class Trending extends Component {
  getSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideosList} = value
        return savedVideosList.length !== 0 ? (
          <VideosListContainer>
            {savedVideosList.map(video => {
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
                    <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
                    <VideoProfileContainer>
                      <ProfileImage src={profileImageUrl} alt="channel logo" />
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
        ) : (
          this.getNoSavedVideosView()
        )
      }}
    </NxtWatchContext.Consumer>
  )

  getNoSavedVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              save
            />
            <NoResultsHeading themeColor={darkTheme}>
              No saved videos found
            </NoResultsHeading>
            <NoResultsParagraph>
              You can save your videos while watching them
            </NoResultsParagraph>
          </NoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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
                <HomeContainer themeColor={darkTheme} data-testid="savedVideos">
                  <HeadingAndIconContainer themeColor={darkTheme}>
                    <TabIcon themeColor={darkTheme}>
                      <HiFire />
                    </TabIcon>
                    <TabHeading themeColor={darkTheme}>Saved Videos</TabHeading>
                  </HeadingAndIconContainer>
                  {this.getSuccessView()}
                </HomeContainer>
              </SideNavbarContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
