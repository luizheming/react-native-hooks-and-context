import 'react-native-gesture-handler'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {AuthProvider} from './contexts/auth'

import Routes from './routes'
import {LanguageProvider} from "./contexts/language";

const App: React.FC = () => {

    return (
        <AuthProvider>
            <LanguageProvider>
                <NavigationContainer>
                    <Routes/>
                </NavigationContainer>
            </LanguageProvider>
        </AuthProvider>
    )
}

export default App
