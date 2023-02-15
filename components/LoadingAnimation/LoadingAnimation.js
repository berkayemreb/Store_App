import React from 'react';
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => {
    return (
        <LottieView
            autoPlay
            source={require('../../../assets/loading.json')}
        />
    )
}

export default LoadingAnimation;