import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
  changeActiveTab: () => {},
  tabsList: [],
  showPremiumPlan: true,
  deletingBanner: () => {},
})

export default NxtWatchContext
