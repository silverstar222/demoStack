import React, { Component } from "react";
import {
    View,
    Image
} from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../resources/logo.png';

class SplashScreen extends Component {

    showLoginScreen() {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <LinearGradient
                colors={['#727AF2', '#3090AE']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.mainContainer}
            >
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <View style={styles.authContainer}>
                    <Button
                        title='Sing Up'
                        buttonStyle={styles.authButton}
                        containerStyle= {styles.authButtonContainer}
                    />
                    <Button
                        title='Login'
                        onPress={() => this.showLoginScreen()}
                        buttonStyle={styles.authButton}
                        containerStyle= {styles.authButtonContainer}
                    />
                    <Button
                        title='Forgot Password'
                        buttonStyle={styles.forgotPassButton}
                        containerStyle={styles.forgotPassButtonContainer}
                        titleStyle={styles.forgotPassTextButton}
                    />
                </View>
            </LinearGradient>
        );
    }
}

const styles = {
    logo: {
        flex: 1,
        resizeMode: 'center',
        alignSelf: 'center'
    },
    authButtonContainer: {
        width: '100%',
        height: 44
    },
    authButton: {
        backgroundColor: 'green'
    },
    forgotPassButtonContainer: {
        height: 44
    },
    forgotPassButton: {
        backgroundColor: 'transparent'
    },
    forgotPassTextButton: {
        color: 'green'
    },
    authContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default SplashScreen;