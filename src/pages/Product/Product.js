import React from "react";
import { FlatList } from 'react-native';
import { URL_PRODUCT_API } from '@env';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import LoadingAnimation from "../../components/LoadingAnimation";
import ErrorAnimation from "../../components/ErrorAnimation";

import { useDispatch } from "react-redux";

const Product = ({ navigation }) => {

    const dispatch = useDispatch();
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

    return (<FlatList data={data} renderItem={renderProduct} />)
}

export default Product;