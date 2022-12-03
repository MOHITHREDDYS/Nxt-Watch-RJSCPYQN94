import styled from 'styled-components'

export const VideosListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`

export const VideoContainer = styled.li`
  width: 150px;
  margin: 10px;
  @media screen and (min-width: 576px) {
    margin: 10px;
    margin-bottom: 30px;
    width: 180px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-left: 40px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 576px) {
    height: 230px;
    flex: 0;
  }
`

export const VideoHeading = styled.h1`
  color: ${props => (props.themeColor ? '#f1f5f9' : '#0f0f0f')};
  font-size: 15px;
  margin-top: 10px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 0px;
  max-height: 40px;
  font-weight: 500;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    margin-bottom: 5px;
    max-height: none;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 5px;
    max-height: 112px;
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
