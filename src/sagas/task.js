import { call, put } from 'redux-saga/effects'
import { loadTasks } from 'src/apis'

export function * doLoadTask (token) {
  try {
    const taskData = yield call(loadTasks, token)
    yield put({ type: 'FETCH_TASK_SUCCESS', taskData })
  } catch (error) {
    yield put({ type: 'FETCH_TASK_FAILURE', error })
  }
}
