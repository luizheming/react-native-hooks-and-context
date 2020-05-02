import React, {useContext} from 'react'
import {View, Button, StyleSheet, Text} from 'react-native'
import AuthContext from '../../contexts/auth'
import LanguageContext from "../../contexts/language";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const SignIn: React.FC = () => {
    const {signIn} = useContext(AuthContext)
    const {label}= useContext(LanguageContext)

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <Button title="Sign In" onPress={() => signIn()}/>
        </View>
    )
}

export default SignIn
