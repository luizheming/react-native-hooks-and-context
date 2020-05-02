import React, {useContext} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import AuthContext from '../../contexts/auth'
import LanguageContext from "../../contexts/language";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

const Dashboard: React.FC = () => {
    const {user, signOut} = useContext(AuthContext)
    const {label, changeLanguage} = useContext(LanguageContext)

    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <Text>{user?.name}</Text>
            <Button title="Sign Out" onPress={() => signOut()}/>
            <Button title={'Português'} onPress={() => changeLanguage('pt-BR')} />
        </View>
    )
}

export default Dashboard
