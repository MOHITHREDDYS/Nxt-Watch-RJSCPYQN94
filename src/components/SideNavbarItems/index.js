import {Link} from 'react-router-dom'
import {IconNameButton, HamItems} from './styledComponents'

const SideNavbarItems = props => {
  const {tabDetails, changeActiveTab, darkTheme} = props
  const {id, displayIcon, displayText, path, isActive} = tabDetails

  const onClickingHamLink = () => {
    changeActiveTab(id)
  }

  return (
    <Link to={path} className="ham-links" key={id} onClick={onClickingHamLink}>
      <IconNameButton type="button" active={isActive} themeColor={darkTheme}>
        {displayIcon}
        <HamItems active={isActive} themeColor={darkTheme}>
          {displayText}
        </HamItems>
      </IconNameButton>
    </Link>
  )
}

export default SideNavbarItems
