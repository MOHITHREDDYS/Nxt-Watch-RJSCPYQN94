import {
  NoResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsParagraph,
  RetryButton,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {onClickingRetryButton} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const onClickingButton = () => {
          onClickingRetryButton()
        }

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
              Oops! Something Went Wrong
            </NoResultsHeading>
            <NoResultsParagraph>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultsParagraph>
            <RetryButton onClick={onClickingButton}>Retry</RetryButton>
          </NoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
