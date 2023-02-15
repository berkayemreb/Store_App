import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import { URL_API } from '@env';
import LoadingAnimation from '../../components/LoadingAnimation';
import ErrorAnimation from '../../components/ErrorAnimation';

const Detail = ({ route }) => {

    const { productId } = route.params;
    const { data, loading, error } = useFetch(`${URL_API}/${productId}`);

    if (loading) {
        return <LoadingAnimation />
    }

    if (error) {
        return <ErrorAnimation />
    }

    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: data.image }} />
            </View>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} <Text >{'\u20AC'}</Text> </Text>
            </View>
        </View>
    )
}

export default Detail;