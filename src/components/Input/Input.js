import React from "react";
import { SafeAreaView, TextInput } from 'react-native';
import styles from './Input.style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Input = ({ placeholder, onChangeText, value, isSecure, iconName }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
            <MaterialCommunityIcons name={iconName} size={24} color='#494949'/>

        </SafeAreaView>
    )
}

export default Input;