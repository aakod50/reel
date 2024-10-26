import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store';
import Router from './src/Router';

export default class App extends React.Component {
  constructor() {
    super();

    var config = {
       apiKey: "AIzaSyB2yQVFvzhG1otRNrr-q43o3GXTX01t3bw",
        authDomain: "testrealestate-515d0.firebaseapp.com",
        projectId: "testrealestate-515d0",
        storageBucket: "testrealestate-515d0.appspot.com",
        messagingSenderId: "423396324786",
        appId: "1:423396324786:web:de9e306120af5fa01920ab",
        measurementId: "G-KMLBTTNMNJ"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
