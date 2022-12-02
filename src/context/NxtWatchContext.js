import React from 'react'

import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  tabsList: [
    {
      id: 1,
      displayText: 'Home',
      displayIcon: <AiFillHome className="ham-icons" />,
      isActive: 'yes',
      path: '/',
    },
    {
      id: 2,
      displayText: 'Trending',
      displayIcon: <HiFire className="ham-icons" />,
      isActive: 'no',
      path: '/trending',
    },
    {
      id: 3,
      displayText: 'Gaming',
      displayIcon: <SiYoutubegaming className="ham-icons" />,
      isActive: 'no',
      path: '/gaming',
    },
    {
      id: 4,
      displayText: 'Saved Videos',
      displayIcon: <MdPlaylistAdd className="ham-icons" />,
      isActive: 'no',
      path: '/saved-videos',
    },
  ],
})

export default NxtWatchContext
