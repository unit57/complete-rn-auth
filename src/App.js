import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyB0PI5xupOg9IPSM7bu0q3_8HbJXvWIsYk",
            authDomain: "manager-97008.firebaseapp.com",
            databaseURL: "https://manager-97008.firebaseio.com",
            projectId: "manager-97008",
            storageBucket: "manager-97008.appspot.com",
            messagingSenderId: "898638547490",
            appId: "1:898638547490:web:5c9e2aa261f2cbef"
        };
        firebase.initializeApp(config)
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;