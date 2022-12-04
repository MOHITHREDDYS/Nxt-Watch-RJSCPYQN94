import {MdClose} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  PlanMainContainer,
  PlanDescription,
  PlanLogo,
  Description,
  Button,
  CloseButton,
} from './styledComponents'

const PremiumPlan = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {deletingBanner} = value

      const onClickingCloseIcon = () => {
        deletingBanner()
      }

      return (
        <PlanMainContainer data-testid="banner">
          <PlanDescription>
            <PlanLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Description>
              Buy Nxt Watch Premium prepaid plans with UPI
            </Description>
            <Button type="button">GET IT NOW</Button>
          </PlanDescription>
          <CloseButton onClick={onClickingCloseIcon} data-testid="close">
            <MdClose />
          </CloseButton>
        </PlanMainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default PremiumPlan
