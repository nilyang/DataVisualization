## dva 开发流程及核心概念

#### 预备知识：
- Npm
- Nodejs
- React

### 相关链接

[dva 流程及术语概念](https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/concepts.md)

[dva 开发计数器示例](https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/getting-started.md)

### 本案例说明

> 本案例在计数器基础上，将Component组件独立出来成为一个文件引入到index.js中

```
import React, {Component} from 'react';
import styles from './index.less';

const CountApp = ({count, dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};
export default CountApp;
```

### 路由

> 本案例定义了两个路由第一个是根`/`，第二个是`/hello`。

```
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

```
