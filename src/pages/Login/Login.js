import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
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
                <Image style={styles.logo} source={require('../../../assets/login-logo.png')} />
                {/* staticten bir resim cektiğimiz için require tercih edilir. Eğer ki endpointten bir resim cekecek olsaydık uri:... tercih edilirdi. */}
            </View>
            <View style={styles.body_container}>
                <Input placeholder="Kullanıcı Adınızı Giriniz..." onChangeText={example} />
                <Input placeholder="Şifrenizi Giriniz..." onChangeText={example} />
                <Button text="Giriş Yap" onPress={() => console.log("Giriş Yapıldı...")} />
            </View>
        </SafeAreaView>
    )
}

export default Login;