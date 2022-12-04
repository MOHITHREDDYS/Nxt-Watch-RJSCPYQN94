import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  changeActiveTab: () => {},
  tabsList: [],
  showPremiumPlan: true,
  deletingBanner: () => {},

  /* .......................... */
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  /* .......................... */
  onClickingSaveButton: () => {},
  onClickingLikeButton: () => {},
  onClickingDislikeButton: () => {},
})

export default NxtWatchContext
