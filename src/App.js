import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
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
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const initialTabsList = [
  {
    id: 1,
    displayText: 'Home',
    displayIcon: <AiFillHome className="ham-icons" />,
    path: '/',
  },
  {
    id: 2,
    displayText: 'Trending',
    displayIcon: <HiFire className="ham-icons" />,
    path: '/trending',
  },
  {
    id: 3,
    displayText: 'Gaming',
    displayIcon: <SiYoutubegaming className="ham-icons" />,
    path: '/gaming',
  },
  {
    id: 4,
    displayText: 'Saved Videos',
    displayIcon: <MdPlaylistAdd className="ham-icons" />,
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

  componentDidMount() {
    const getSavedVideos = JSON.parse(localStorage.getItem('saved_videos'))
    const getLikedVideos = JSON.parse(localStorage.getItem('liked_videos'))
    const getDislikedVideos = JSON.parse(
      localStorage.getItem('disliked_videos'),
    )
    const isDarkThemeApplied = JSON.parse(localStorage.getItem('dark_theme'))

    this.setState({
      savedVideosList: getSavedVideos !== null ? getSavedVideos : [],
    })
    this.setState({
      likedVideosList: getLikedVideos !== null ? getLikedVideos : [],
    })
    this.setState({
      dislikedVideosList: getDislikedVideos !== null ? getDislikedVideos : [],
    })

    this.setState({
      darkTheme: isDarkThemeApplied !== null ? isDarkThemeApplied : false,
    })
  }

  toggleTheme = async () => {
    await this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
    this.savetoLocalStorage()
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

  savetoLocalStorage = () => {
    const {
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
      darkTheme,
    } = this.state
    localStorage.setItem('saved_videos', JSON.stringify(savedVideosList))
    localStorage.setItem('liked_videos', JSON.stringify(likedVideosList))
    localStorage.setItem('disliked_videos', JSON.stringify(dislikedVideosList))
    localStorage.setItem('dark_theme', JSON.stringify(darkTheme))
  }

  onClickingSaveButton = async (id, addVideo) => {
    const {savedVideosList} = this.state

    const isPresent = savedVideosList.some(video => video.id === id)

    if (!isPresent) {
      await this.setState({
        savedVideosList: [...savedVideosList, addVideo],
      })
    } else {
      await this.setState({
        savedVideosList: savedVideosList.filter(video => video.id !== id),
      })
    }
    this.savetoLocalStorage()
  }

  onClickingLikeButton = async (id, addVideo) => {
    const {likedVideosList, dislikedVideosList} = this.state

    const isPresent = likedVideosList.some(video => video.id === id)

    if (!isPresent) {
      await this.setState({
        likedVideosList: [...likedVideosList, addVideo],
        dislikedVideosList: dislikedVideosList.filter(video => video.id !== id),
      })
    } else {
      await this.setState({
        likedVideosList: likedVideosList.filter(video => video.id !== id),
      })
    }
    this.savetoLocalStorage()
  }

  onClickingDislikeButton = async (id, addVideo) => {
    const {dislikedVideosList, likedVideosList} = this.state

    const isPresent = dislikedVideosList.some(video => video.id === id)

    if (!isPresent) {
      await this.setState({
        dislikedVideosList: [...dislikedVideosList, addVideo],
        likedVideosList: likedVideosList.filter(video => video.id !== id),
      })
    } else {
      await this.setState({
        dislikedVideosList: dislikedVideosList.filter(video => video.id !== id),
      })
    }
    this.savetoLocalStorage()
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
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
