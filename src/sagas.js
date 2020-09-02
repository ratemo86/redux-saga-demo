import { put, takeEvery, all, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
  yield 5
  return 9
}


export function* incrementAsync() {
    // use the call Effect
    yield call(delay, 1000)
    //yield put({ type: 'INCREMENT' })
  }

/* function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
} */

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
