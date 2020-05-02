import React, {createContext, useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'
import api from '../services/api'

import {AUTH_TOKEN, AUTH_USER} from "../config"

interface User {
    name: string,
    email: string
}

interface AuthContextData {
    signed: boolean,
    token: string,
    user: User | null,
    loading: boolean,

    signIn(): Promise<void>,

    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem(AUTH_USER)
            const storagedToken = await AsyncStorage.getItem(AUTH_TOKEN)

            api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser))
            }
        }

        loadStorageData().then(() =>
            setLoading(false)
        )
    }, [])

    async function signIn() {
        setLoading(true)
        const response = await auth.signIn()

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        await AsyncStorage.setItem(AUTH_USER, JSON.stringify(response.user))
        await AsyncStorage.setItem(AUTH_TOKEN, JSON.stringify(response.token))

        setUser(response.user)
        setLoading(false)
    }

    function signOut() {
        AsyncStorage.clear()
            .then(() =>
                setUser(null)
            )
    }

    const startAuthContextData: AuthContextData = {
        signed: !!user,
        token: '',
        loading,
        user,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={startAuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
