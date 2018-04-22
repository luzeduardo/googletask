import { setToken, setHasLogout } from 'src/utils'

const initialState = {
  usertoken: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      setToken(action.usertoken)
      setHasLogout(false)

      return {
        ...state,
        usertoken: action.usertoken
      }

    case 'LOGOFF_USER':
      setToken(null)

      return {
        ...state,
        ...initialState
      }

    default:
      return state
  }
}
