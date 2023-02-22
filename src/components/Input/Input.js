import React from "react";
import { SafeAreaView, TextInput } from 'react-native';
import styles from './Input.style';
const Input = ({ placeholder, onChangeText }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} />
        </SafeAreaView>
    )
}

export default Input;