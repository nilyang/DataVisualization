import test from 'tape'

import { put , call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

test('incrementAsync Saga test', (assert)=> {
    const gen = incrementAsync()

    //----- 结果不能准确预测时，这种情况不好测试-----//
    // assert.deepEqual(
    //     gen.next(),
    //     {done:false, value: ??? },
    //     'incrementAsync should return a Promise that will resolve after 1 second'
    // )

    // 需要修改sagas的put和call，将saga的创建和执行分开，这样便于测试
    // 因为实际上 put 和 call 分别返回的是
    // yield call(delay,1000)           // => { CALL: {fn: delay, args: [1000]}}
    // yield put({ type: 'INCREMENT' }) // => { PUT: {type: 'INCREMENT'} }

    //-----------下面开始测试代码--------------//

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000), //利用执行结果来对比
        'incrementAsync Saga must call delay(1000)'
    )

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        {done:true, value: undefined},
        'incrementAsync Saga must be done'
    )

    assert.end()
    
})