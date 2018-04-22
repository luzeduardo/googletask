import { call, put } from 'redux-saga/effects'
import { reactLocalStorage } from 'reactjs-localstorage'

export function * doLogin ({ usertoken }) {
  try {
    yield reactLocalStorage.set('usertoken', usertoken)

    yield put({
      type: 'LOGIN_USER',
      usertoken
    })
    yield put({
      type: 'NAVIGATE_TO_TASKS'
    })
  } catch (e) {
    console.log(e)
  }
}

export function * doLogoff () {
  try {
    yield reactLocalStorage.set('usertoken', null)

    yield put({
      type: 'LOGOFF_USER',
      usertoken: null
    })
    yield put({
      type: 'NAVIGATE_TO_INDEX'
    })
  } catch (e) {
    console.log(e)
  }
}
