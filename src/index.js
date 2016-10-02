import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCuVeQIix7oHbKwE79XPyQHlOsffcCY62M",
  authDomain: "brasilforce-eb7da.firebaseapp.com",
  databaseURL: "https://brasilforce-eb7da.firebaseio.com",
  storageBucket: "brasilforce-eb7da.appspot.com",
  messagingSenderId: "422887134618"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
