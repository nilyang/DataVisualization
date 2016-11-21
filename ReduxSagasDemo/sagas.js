import { takeEvery, takeLatest, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'


export function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
// 工作Saga: 将执行异步递增任务
export function* incrementAsync() {
  // use the call Effect
  yield call(delay,1000)           // => { CALL: {fn: delay, args: [1000]}}
  yield put({ type: 'INCREMENT' }) // => { PUT: {type: 'INCREMENT'} }
}

// Our watcher Saga: spwan a new incrementAsync task on each INCREMENT_ASYNC
// 监控Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  // yield takeEvery('INCREMENT_ASYNC', incrementAsync)  // 每次都有效
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)    //只取最后一次有效，如果前面有发起则取消之
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}

