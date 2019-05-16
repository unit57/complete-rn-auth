import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>HELLO</Text>
                </View>
            </Provider>
        );
    }
}

export default App;