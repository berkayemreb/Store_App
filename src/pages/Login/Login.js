import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './Login.style';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Formik } from 'formik';

const Login = () => {

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/login-logo.png')} />
                {/* staticten bir resim cektiğimiz için require tercih edilir. Eğer ki endpointten bir resim cekecek olsaydık uri:... tercih edilirdi. */}
            </View>
            <Formik
                initialValues={{ userName: '', password: '' }}
                onSubmit={onSubmit}
            >
                {({ handleChange, values, handleSubmit }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı Adınızı Giriniz..."
                            onChangeText={handleChange('userName')}
                            value={values.userName}
                            iconName='account'
                        />
                        <Input
                            placeholder="Şifrenizi Giriniz..."
                            onChangeText={handleChange('password')}
                            value={values.password}
                            iconName='key'
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;

// GENEL NOT: formik kullanmak yerine stateler ile de bu işlemi yapabilirdik ama her harf degişikliginde tüm component render edileceği için verimli olmazdı. Bu yuzden form yapılarında formik kullanmak daha kullanışlıdır.