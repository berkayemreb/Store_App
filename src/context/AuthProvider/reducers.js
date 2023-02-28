import AsyncStorage from '@react-native-async-storage/async-storage';


export default function reducers(state, action) {
    switch (action.type) {
        case 'SET_USER':
            const { user } = action.payload;
            user
                ? AsyncStorage.setItem('@USER', JSON.stringify(user)) // telefonun belleğine bu şekilde string olarak atmamız gerekir.
                : AsyncStorage.removeItem('@USER') // telefonun belleğinden kaldırma işlemi bu şekildedir.
            return { ...state, user }; // state'i olduğu gibi geri döndür ama 'user: user' olarak geri döndür. -ES6 nın özelliği-

        default:
            return state;
    }
}