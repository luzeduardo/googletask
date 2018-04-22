let usertoken = null
let hasLogout = false

export const setToken = newToken => {
  usertoken = newToken
}

export const getToken = () => usertoken

export const setHasLogout = logout => {
  hasLogout = logout
}

export const getHasLogout = () => hasLogout