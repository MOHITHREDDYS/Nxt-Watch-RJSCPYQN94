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
  background-color: ${props => (props.themeColor ? '#181818' : '#f9f9f9')};
  flex: 1;
  max-height: 90vh;
  overflow: scroll;
`
export const SearchMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    align-items: flex-start;
  }
`
export const SearchContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  border: 1px solid ${props => (props.themeColor ? '#1e293b' : '#94a3b8')};
  margin-bottom: 20px;
  padding-left: 5px;

  @media screen and (min-width: 576px) {
    width: 75%;
    max-width: 500px;
  }
`

export const SearchInput = styled.input`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
`
export const SearchButton = styled.button`
  height: 35px;
  width: 50px;
  background-color: ${props => (props.themeColor ? '#231f20' : '#ebebeb')};
  border: none;
  border-left: 1px solid ${props => (props.themeColor ? '#1e293b' : '#94a3b8')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`
export const SearchIcon = styled.div`
  color: #909090;
  font-size: 20px;
`
/* /////////////////////// ////////////////////////////////// */

export const HomeItemsContainer = styled.div`
  padding-top: 20px;
`
/* ///////////////////////////////////////////////////////////// */

export const VideosListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

export const VideoContainer = styled.li`
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 45%;
    margin: 10px;
    flex: 1;
    min-width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
    flex: 1;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 576px) {
    height: 150px;
  }
`

export const VideoProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 15px;
`

export const ProfileImage = styled.img`
  width: 50px;
`

export const VideoDetailsContainer = styled.div`
  margin-left: 15px;
`
export const VideoHeading = styled.h1`
  color: ${props => (props.themeColor ? '#f1f5f9' : '#0f0f0f')};
  font-size: 13px;
  margin-top: 0px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 0px;
  max-height: 40px;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-bottom: 5px;
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

/* //////////////////////////////////// No Results //////////////////////////////////// */

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 60px;
`

export const NoResultsImage = styled.img`
  width: 60%;
  max-width: 300px;
`
export const NoResultsHeading = styled.h1`
  color: ${props => (props.themeColor ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  text-align: center;
  font-family: 'Roboto';
  margin-bottom: 10px;
`

export const NoResultsParagraph = styled.p`
  color: ${props => (props.themeColor ? '#ffffff' : '#475569')};
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  font-family: 'Roboto';
  margin-top: 0px;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  padding: 10px 30px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`
