import { takeLatest, all } from 'redux-saga/effects'
import { doLogin, doLogoff } from 'src/sagas/user'

function * rootSaga () {
  yield all([
    takeLatest('DO_LOGIN', doLogin),
    takeLatest('DO_LOGOFF', doLogoff)
  ])
}

export default rootSaga
