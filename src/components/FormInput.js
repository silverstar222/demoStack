import React from "react";
import {
    Input,
    Icon
} from 'react-native-elements';

const FormInput = props => {
    const { icon, refInput, ...otherProps } = props;
    return (
        <Input
            {...otherProps}
            ref={refInput}
            inputContainerStyle={styles.inputContainer}
            containerStyle={{width:'100%'}}
            leftIcon={<Icon name={icon} color="#ffffff" size={18} />}
            inputStyle={styles.inputStyle}
            autoFocus={false}
            autoCapitalize="none"
            keyboardAppearance="dark"
            errorStyle={styles.errorInputStyle}
            autoCorrect={false}
            blurOnSubmit={false}
            placeholderTextColor="#ffffff99"
        />
    )
};

const styles= {
    inputContainer: {
        borderColor: '#ffffff',
        height: 40,
        marginVertical: 10
    }
};

export { FormInput };