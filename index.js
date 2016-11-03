import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import fetch from 'dva/fetch';
import React from 'react';
//import component
import HelloApp from './HelloApp';
import CountApp from './CountApp';

// 1. Initialize
const app = dva();
console.log(app._state);
// 2. Model
// Remove the comment and define your model.
app.model({
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent: state.record,
        current: newCurrent,
      }
    },
    minus(state) {
      return { ...state, current: state.current - 1};
    },
  }

});

// 3. Router
function mapStateToProps(state) {
  return { count: state.count };
}
const HomePage = connect(mapStateToProps)(CountApp);

const HelloPage = () => <HelloApp />;
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
    <Route path="/Hello" component={HelloPage}/>
  </Router>
);

// 4. Start
app.start('#root');
