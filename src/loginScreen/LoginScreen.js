import React,{ Component } from "react";
import {
    View,
    Image,
    LayoutAnimation,
    Keyboard,
    Text
} from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../resources/logo.png';
import { FormInput } from '../components/FormInput';

type Props = {};

class LoginScreen extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
        };

        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validatePassword() {
        const { password } = this.state;
        const passwordValid = password.length >= 8;
        LayoutAnimation.easeInEaseOut();
        this.setState({ passwordValid });
        passwordValid ? Keyboard.dismiss() : this.passwordInput.shake();
        return passwordValid;
    }

    validateEmail() {
        const { email } = this.state;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const emailValid = re.test(email);
        LayoutAnimation.easeInEaseOut();
        this.setState({ emailValid });
        emailValid ? this.passwordInput.focus() : this.emailInput.shake();
        return emailValid;
    }

    renderAuthForm() {
        const { email, emailValid, password , passwordValid } = this.state;
        return(
            <View style={styles.authForm}>
                <FormInput
                    refInput={input => (this.emailInput = input)}
                    icon="email"
                    value={email}
                    onChangeText={email => this.setState({ email })}
                    label="Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    errorMessage={emailValid ? null : 'Please enter a valid email address'}
                    onSubmitEditing={() => {
                        this.validateEmail();
                    }}
                />
                <FormInput
                    refInput={input => (this.passwordInput = input)}
                    icon="lock"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                    label="Password"
                    secureTextEntry
                    returnKeyType="done"
                    errorMessage={passwordValid ? null : 'Please enter at least 8 characters'}
                    onSubmitEditing={() => {
                        this.validatePassword();
                    }}
                />
                <Button
                    title='SUBMIT'
                    onPress={() => null}
                    buttonStyle={styles.loginButton}
                    containerStyle= {styles.loginButtonContainer}
                />
            </View>
        );
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
                {this.renderAuthForm()}
            </LinearGradient>

        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginVertical: 40,
        height: 50,
        width: 50,
        resizeMode: 'center',
        alignSelf: 'center'
    },
    authForm: {
        flex: 2,
        flexDirection: 'column',
        width: '87%',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start'
    },
    loginButtonContainer: {
        width: '100%',
        height: 44
    },
    loginButton: {
        backgroundColor: 'green'
    }
};

export default LoginScreen;