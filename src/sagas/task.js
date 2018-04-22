import { call, put } from 'redux-saga/effects';
import { loadScore } from '@/sagas/apiCalls';

export function* doLoadScore(payload) {
  try {
    const { cpf } = payload;
    const scoreData = yield call(loadScore, cpf);
    yield put({ type: 'FETCH_SCORE_SUCCESS', scoreData });
  } catch (error) {
    yield put({ type: 'FETCH_SCORE_FAILURE', payload: payload, error });
  }
}