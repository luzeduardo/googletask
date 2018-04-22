export const doLogin = (user = {}) => {
  return { type: 'DO_LOGIN', usertoken: user.accessToken }
}

export const doLogoff = (user = {}) => {
  return { type: 'DO_LOGOFF' }
}