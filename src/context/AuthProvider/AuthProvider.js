import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from './reducers';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession)); // bu satır "useSession varsa setUser işlemini yap" anlamına geliyor.
            setIsAuthLoading(false);
        })
    }, [])

    const store = createStore(reducers, { user, isAuthLoading })

    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider;