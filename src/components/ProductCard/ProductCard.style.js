import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#a69b97',
        borderRadius: 5,

    },
    image: {
        width: 100,
        minHeight: 100,
        // resmin yüksekliği minimum 100 olacak eğer ki body_container kısmının yüksekliği 100 den büyükse o yüksekliğe kadar gidecek.
        resizeMode: 'contain',
        // resizeMode, resmin tamamını görmek istersek eğer, ortalamak (güzel duraması) için kullanılır.
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    body_container: {
        padding: 3,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        paddingHorizontal: 5,
        fontWeight: '600',
        fontSize: 16,
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
    },
})