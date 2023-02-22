import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4fc3f7',
    },
    logo: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        tintColor: '#f0f0f0' // png formattaki resimlere renk verebilmemize olanak sağlar
    },
    logo_container: {
        flex:1,
        justifyContent:'center'
    },
    body_container: {
        flex:1,
    }
})