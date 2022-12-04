import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const SideNavbarContainer = styled.div`
  display: flex;
  flex: 1;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#f9f9f9')};
  flex: 1;
  max-height: 90vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`
export const HeadingAndIconContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#181818' : '#f1f1f1')};
  display: flex;
  align-items: center;
  padding: 10px 20px;
`
export const TabIcon = styled.div`
  color: red;
  font-size: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.themeColor ? '#000000' : '#e2e8f0')};
  border-radius: 50px;
`

export const TabHeading = styled.h1`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-size: 24px;
  font-family: 'Roboto';
  margin-left: 15px;
`
/* ////////////////////////////////////////////////////////////////////////////// */

export const VideosListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 576px) {
    width: 350px;
    height: 180px;
    flex: 0;
  }
`

export const VideoProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 15px;
  @media screen and (min-width: 576px) {
    width: 45%;
    flex: 1;
    padding: 0px;
  }
`

export const ProfileImage = styled.img`
  width: 45px;
  margin-right: 15px;
`

export const VideoDetailsContainer = styled.div`
  margin: 20px 15px;
  @media screen and (min-width: 768px) {
    margin: 30px 0px;
    max-width: 800px;
  }
`
export const VideoHeading = styled.h1`
  color: ${props => (props.themeColor ? '#f1f5f9' : '#0f0f0f')};
  font-size: 17px;
  margin-top: 0px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const Details = styled.p`
  color: ${props => (props.themeColor ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const PublishedViewContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DotIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: ${props => (props.themeColor ? '#94a3b8' : '#475569')};
  @media screen and (min-width: 576px) {
    display: ${props => (props.extraSmall ? 'none' : 'flex')};
  }
`
/* //////////////////////////////////////////////////////////  */

export const VideoItemContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

/* //////////////////////////////////////////////////////////////// */
export const VideoContainer = styled.div`
  width: 100%;
`
/* ///////////////////////////////////////////////////////////////// */

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 0px;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    margin: 0px;
    margin-left: 15px;
  }
`
export const LikeIcon = styled(DotIcon)`
  margin-right: 5px;
  color: ${props => {
    const {themeColor, isSaved, isLiked, isDisliked} = props
    if (isSaved || isLiked || isDisliked) {
      return '#3b82f6'
    }
    return themeColor ? '#94a3b8' : '#475569'
  }};
`
export const LikeName = styled(Details)`
  font-size: 16px;
  font-weight: 600;
  color: ${props => {
    const {themeColor, isSaved, isLiked, isDisliked} = props
    if (isSaved || isLiked || isDisliked) {
      return '#3b82f6'
    }
    return themeColor ? '#94a3b8' : '#475569'
  }};
`

export const DetailsAndLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
`
/*                   //////////////////////////                                       */
export const ChannelContainer = styled.div``

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelName = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#000000')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
`
export const Subscribers = styled(ChannelName)`
  color: ${props => (props.themeColor ? '#94a3b8' : '#475569')};
  font-weight: normal;
  margin-top: 5px;
`

export const ChannelDescription = styled.p`
  display: ${props => (props.large ? 'none' : 'flex')};
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    display: ${props => (props.large ? 'flex' : 'none')};
    margin-top: 20px;
  }
`

export const HorizontalLine = styled.hr`
  border: none;
  border-bottom: 2px solid
    ${props => (props.themeColor ? '#475569' : '#ebebeb')};
  margin-bottom: 30px;
`
