import React, { Component }from 'react';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// Remove warning related to https://github.com/react-navigation/react-navigation/issues/3956

import SplashScreen from './splashScreen/SplashScreen';
import LoginScreen from './loginScreen/LoginScreen';


const RootStack = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Splash'
    }
);

export default class App extends Component {
    render() {
        return <RootStack />;
    }
}