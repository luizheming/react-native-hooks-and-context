import React, {useContext} from 'react'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import AuthContext from "../contexts/auth";
import {ActivityIndicator, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    loading: {flex: 1, justifyContent: 'center', alignItems: 'center'}
})

const Routes: React.FC = () => {
    const {signed, loading} = useContext(AuthContext)

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size={"large"} color={'#999'}/>
            </View>
        )
    }

    return signed
        ? <AppRoutes/>
        : <AuthRoutes/>
}

export default Routes
