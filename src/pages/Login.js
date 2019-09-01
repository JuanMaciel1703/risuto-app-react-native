import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text, Input, Icon, Button } from 'react-native-elements'
import api from '../services/Api'

import logo from '../assets/img/ic_launcher.png'

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleLogin() {
    try {
      const response = await api.post('/login', {
        email: 'teste6@email.com',
        password: '123456789'
      }).then((response) => {
        const { token } = response.data
        console.log(token)
        navigation.navigate('Main')
      }).catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <View style={styles.container}>
            <Image
                source={ logo }
                style={{ width: 150, height: 150 }}
            />

            <Text h2>Risuto</Text>
  
            <Input
                leftIcon={
                  <Icon
                    name="email"
                    size={25}
                  />
                }
                containerStyle={{ marginVertical: 10 }}
                inputStyle={{ marginLeft: 10}}
                placeholder="Email"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholderTextColor="black"
                value='teste6@email.com'
                onChangeText={setUserEmail}
              />

            <Input
                leftIcon={
                  <Icon
                    name="lock"
                    size={25}
                  />
                }
                containerStyle={{ marginVertical: 10 }}
                inputStyle={{ marginLeft: 10}}
                keyboardAppearance="light"
                placeholder="Senha"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="black"
                secureTextEntry={true}
                value='123456789'
                onChangeText={setUserPassword}
              />

            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title="Cadastrar-se"
                />
                <Button
                    style={styles.button}
                    title="Login"
                    onPress={handleLogin}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    buttonContainer: {
        flex: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        marginLeft: 10,
        flex: 1
        
    }
})