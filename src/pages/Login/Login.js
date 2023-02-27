import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import styles from './Login.style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Formik } from 'formik';

import usePost from '../../hooks/usePost';
import { URL_AUTH_API } from '@env';

const Login = ({ navigation }) => {

    const { data, loading, error, setError, post } = usePost();

    const onSubmit = (values) => {
        (values.username !== '' && values.password !== '')
            ? post(URL_AUTH_API + '/login', values)
            : Alert.alert('Dükkan', 'Kullanıcı adı ve şifre giriniz.');
    }

    if (error) {
        Alert.alert('Dükkan', 'Kullanıcı adı veya şifre yanlış.');
        setError(false);
    }

    if (data) {
        navigation.navigate('ProductScreen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/login-logo.png')} />
                {/* staticten bir resim cektiğimiz için require tercih edilir. Eğer ki endpointten bir resim cekecek olsaydık uri:... tercih edilirdi. */}
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={onSubmit}
            >
                {({ handleChange, values, handleSubmit }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı Adınızı Giriniz..."
                            onChangeText={handleChange('username')}
                            value={values.username}
                            iconName='account'
                        />
                        <Input
                            placeholder="Şifrenizi Giriniz..."
                            onChangeText={handleChange('password')}
                            value={values.password}
                            iconName='key'
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;

// GENEL NOT: formik kullanmak yerine stateler ile de bu işlemi yapabilirdik ama her harf degişikliginde tüm component render edileceği için verimli olmazdı. Bu yuzden form yapılarında formik kullanmak daha kullanışlıdır.


