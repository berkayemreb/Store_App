import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './Login.style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
    const example = (text) => {
        console.log(text);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Text>LOGO!</Text>
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı Adınızı Giriniz..." onChangeText={example} />
                <Input placeholder="Şifrenizi Giriniz..." onChangeText={example} />
                <Button text="Giriş Yap" />
            </View>
        </SafeAreaView>
    )
}

export default Login;