import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image_container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
    },
    inner_container: {
        margin: 7
    },

    title: {
        fontWeight: '600',
        fontSize: 24
    },
    description: {
        fontSize: 16,
        marginVertical: 5,
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '500'

    }
})