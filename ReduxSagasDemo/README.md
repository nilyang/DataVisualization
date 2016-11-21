# redux-saga-beginner-tutorial
Companion Repo for [Redux/Redux-saga beginner tutorial](http://yelouafi.github.io/redux-saga/docs/introduction/BeginnerTutorial.html)

# Instructions

Setup

```
// clone the repo
git clone https://github.com/yelouafi/redux-saga-beginner-tutorial.git

cd redux-saga-beginner-tutorial

npm install
```

Run the demo

```
npm start
```

Run tests

```
npm test
```

## 说明

What happens is that the middleware examines the type of each yielded Effect then decides how to fulfill that Effect. 
If the Effect type is a PUT then it will dispatch an action to the Store. 
If the Effect is a CALL then it'll call the given function.

