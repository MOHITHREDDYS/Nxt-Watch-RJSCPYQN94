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
  height: 100vh;
`
export const SearchMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  border: 1px solid #94a3b8;
  margin-bottom: 20px;
  padding-left: 5px;
`

export const SearchInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
`
export const SearchButton = styled.button`
  height: 35px;
  width: 50px;
  background-color: #ebebeb;
  border: none;
  border-left: 1px solid #94a3b8;
  cursor: pointer;
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
`

export const VideoContainer = styled.li``

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;
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
  font-size: 13px;
  margin-top: 0px;
  font-family: 'Roboto';
  line-height: 1.5;
`
