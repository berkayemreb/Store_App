import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{
                    uri: product.image
                }} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} <Text>{'\u20AC'}</Text></Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        /*
        TouchableWithoutFeedback'in TouchableOpacity ile arasındaki fark:
TouchableOpacity de sayfayı asağıya veya yukarıya kaydırırken opaklık efekti olur , TouchableWithoutFeedback de ise o efekt olmaz.         
        */
    )
}

export default ProductCard;