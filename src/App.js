import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

import Home from './Home.js'
import LoginPage from './containers/Login/LoginPage.js'
import RegisterPage from './containers/Register/RegisterPage.js'
import CreateLearningPath from './containers/LearningPath/CreateLearningPath.js';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} /> */}
          <CreateLearningPath />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
