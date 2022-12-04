import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from './context/NxtWatchContext'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

import './App.css'

// Replace your code here
const initialTabsList = [
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
]

class App extends Component {
  state = {
    darkTheme: false,
    tabsList: initialTabsList,
    showPremiumPlan: true,
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  deletingBanner = () => {
    this.setState({showPremiumPlan: false})
  }

  changeActiveTab = id => {
    this.setState(prevState => ({
      tabsList: prevState.tabsList.map(eachTab => {
        if (eachTab.id === id) {
          return {...eachTab, isActive: 'yes'}
        }
        return {...eachTab, isActive: 'no'}
      }),
    }))
  }

  onClickingSaveButton = (id, addVideo) => {
    const {savedVideosList} = this.state

    const isPresent = savedVideosList.some(video => video.id === id)

    return !isPresent
      ? this.setState({savedVideosList: [...savedVideosList, addVideo]})
      : this.setState({
          savedVideosList: savedVideosList.filter(video => video.id !== id),
        })
  }

  onClickingLikeButton = (id, addVideo) => {
    const {likedVideosList, dislikedVideosList} = this.state

    const isPresent = likedVideosList.some(video => video.id === id)

    return !isPresent
      ? this.setState({
          likedVideosList: [...likedVideosList, addVideo],
          dislikedVideosList: dislikedVideosList.filter(
            video => video.id !== id,
          ),
        })
      : this.setState({
          likedVideosList: likedVideosList.filter(video => video.id !== id),
        })
  }

  onClickingDislikeButton = (id, addVideo) => {
    const {dislikedVideosList, likedVideosList} = this.state

    const isPresent = dislikedVideosList.some(video => video.id === id)

    return !isPresent
      ? this.setState({
          dislikedVideosList: [...dislikedVideosList, addVideo],
          likedVideosList: likedVideosList.filter(video => video.id !== id),
        })
      : this.setState({
          dislikedVideosList: dislikedVideosList.filter(
            video => video.id !== id,
          ),
        })
  }

  render() {
    const {
      darkTheme,
      tabsList,
      showPremiumPlan,
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          toggleTheme: this.toggleTheme,
          tabsList,
          changeActiveTab: this.changeActiveTab,
          showPremiumPlan,
          deletingBanner: this.deletingBanner,
          savedVideosList,
          onClickingSaveButton: this.onClickingSaveButton,
          likedVideosList,
          onClickingLikeButton: this.onClickingLikeButton,
          dislikedVideosList,
          onClickingDislikeButton: this.onClickingDislikeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
