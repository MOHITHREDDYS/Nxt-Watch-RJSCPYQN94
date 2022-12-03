import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import {LoaderContainer} from './styledComponents'

const LoadingView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <LoaderContainer data-testid="loader">
          <Loader
            type="ThreeDots"
            color={darkTheme ? '#ffffff' : '#3b82f6'}
            height="50"
            width="50"
          />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoadingView
