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
  overflow: scroll;
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

export const VideoContainer = styled.li`
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    margin: 10px;
    flex: 1;
    display: flex;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    flex: 1;
    margin-top: 20px;
    margin-left: 40px;
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
  width: 35px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetailsContainer = styled.div`
  margin-left: 15px;
`
export const VideoHeading = styled.h1`
  color: ${props => (props.themeColor ? '#f1f5f9' : '#0f0f0f')};
  font-size: 15px;
  margin-top: 0px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 0px;
  max-height: 40px;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-bottom: 5px;
    max-height: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 5px;
    max-height: 112px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Details = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    margin: 0px;
    font-size: ${props => (props.small ? 13 : 11)}px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px;
    margin-bottom: 6px;
    font-size: ${props => (props.small ? 15 : 14)}px;
  }
`

export const PublishedViewContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DotIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #475569;
  @media screen and (min-width: 576px) {
    display: ${props => (props.extraSmall ? 'none' : 'flex')};
  }
`
