import {Link} from 'react-router-dom'
import {IconNameButton, HamItems} from './styledComponents'

const SideNavbarItems = props => {
  const {tabDetails, changeActiveTab, darkTheme, url} = props
  const {id, displayIcon, displayText, path} = tabDetails

  const onClickingHamLink = () => {
    changeActiveTab(id)
  }

  return (
    <Link to={path} className="ham-links" key={id} onClick={onClickingHamLink}>
      <IconNameButton
        type="button"
        active={url === path ? 'yes' : 'no'}
        themeColor={darkTheme}
      >
        {displayIcon}
        <HamItems active={url === path ? 'yes' : 'no'} themeColor={darkTheme}>
          {displayText}
        </HamItems>
      </IconNameButton>
    </Link>
  )
}

export default SideNavbarItems
