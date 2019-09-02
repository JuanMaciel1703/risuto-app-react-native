import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import LoginForm from './components/LoginForm' 

export default function Login({ navigation }) {
  const [loading, setLoading] = useState('')

    return (
        <View style={styles.container}>
            { !loading ? 
              <LoginForm  
              setLoading={setLoading} 
              navigation={navigation}
              /> : 
              <ActivityIndicator size="large" color="#dd0000" /> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
    }
})