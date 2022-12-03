import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsParagraph,
  RetryButton,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {onClickingRetryButton} = props

  const onClickingButton = () => {
    onClickingRetryButton()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <NoResultsContainer>
            <NoResultsImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <NoResultsHeading themeColor={darkTheme}>
              No Search results found
            </NoResultsHeading>
            <NoResultsParagraph>
              Try different key words or remove search filter
            </NoResultsParagraph>
            <RetryButton type="button" onClick={onClickingButton}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
