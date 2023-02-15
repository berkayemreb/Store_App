import React from 'react';
import LottieView from 'lottie-react-native';

const ErrorAnimation = () => {
    return (
        <LottieView
            autoPlay
            source={require('../../../assets/error.json')}
        />
    )
}

export default ErrorAnimation;