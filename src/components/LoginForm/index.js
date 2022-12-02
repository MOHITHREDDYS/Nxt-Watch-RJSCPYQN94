import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainer,
  LoginCardContainer,
  WebsiteLogo,
  FormContainer,
  InputLabel,
  InputValue,
  CheckboxContainer,
  InputCheckBox,
  CheckboxLabel,
  LoginButton,
  ErrorText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      return this.onSubmitSuccess(data.jwt_token)
    }
    return this.onSubmitFailure(data.error_msg)
  }

  onChangingUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangingPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onClickingShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LoginContainer themeColor={darkTheme}>
              <LoginCardContainer themeColor={darkTheme}>
                <WebsiteLogo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputLabel htmlFor="username" themeColor={darkTheme}>
                    USERNAME
                  </InputLabel>
                  <InputValue
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChangingUsernameInput}
                    themeColor={darkTheme}
                  />
                  <InputLabel htmlFor="password" themeColor={darkTheme}>
                    PASSWORD
                  </InputLabel>
                  {!showPassword && (
                    <InputValue
                      type="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.onChangingPasswordInput}
                      themeColor={darkTheme}
                    />
                  )}
                  {showPassword && (
                    <InputValue
                      type="text"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={this.onChangingPasswordInput}
                      themeColor={darkTheme}
                    />
                  )}
                  <CheckboxContainer>
                    <InputCheckBox
                      type="checkbox"
                      id="checkBox"
                      onClick={this.onClickingShowPassword}
                    />
                    <CheckboxLabel htmlFor="checkBox" themeColor={darkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorText>*{errorMsg}</ErrorText>}
                </FormContainer>
              </LoginCardContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
