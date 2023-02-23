import React from "react";
import { SafeAreaView, TextInput } from 'react-native';
import styles from './Input.style';
const Input = ({ placeholder, onChangeText, value, isSecure }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
            placeholder={placeholder} 
            onChangeText={onChangeText} 
            value={value} 
            secureTextEntry={isSecure}
            />
        </SafeAreaView>
    )
}

export default Input;