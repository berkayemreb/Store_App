import React from "react";
import { View, Text, FlatList } from 'react-native';
import { URL_PRODUCT_API } from '@env';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";

const Product = ({ navigation }) => {

    const { data, loading, error } = useFetch(URL_PRODUCT_API);

    const handleProductSelect = (id) => {
        navigation.navigate('DetailScreen', { productId: id })
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    if (loading) {
        return <LoadingAnimation />
    }

    if (error) {
        return <ErrorAnimation />
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
}

export default Product;