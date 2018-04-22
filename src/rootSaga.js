import { takeLatest, all } from 'redux-saga/effects'
import { doLogin, doLogoff } from 'src/sagas/user'

function * rootSaga () {
  yield all([
    takeLatest('DO_LOGIN', doLogin),
    takeLatest('DO_LOGOFF', doLogoff),
    // takeLatest('GET_USER_DATA', doGetUserData),
  ])
}

export default rootSaga
