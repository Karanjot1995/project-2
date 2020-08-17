import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './components/reducers/reducer'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';    
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './assets/css/aos.css'
// import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/animate.css'
import './assets/css/style.css'
import './assets/scss/main.scss'
import Home from './components/Home';
import Contact from './components/Contact';

// import './assets/css/open-iconic-bootstrap.min.css'
// import './assets/css/ionicons.min.css'
// import './assets/css/flaticon.css'
// import './assets/css/icomoon.css'





const store = createStore(
  reducer,
  // persistedState, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
        
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
