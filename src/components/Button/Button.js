import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './Button.style';

const Button = ({ text, onPress, loading }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={loading}
        >
            {loading ? (
                <ActivityIndicator color='#fff' />
            ) : (
                <Text style={styles.text}>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

export default Button;