import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Image, Text, Input, Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/Api'

export default function Main({ navigation }) {
    const [lists, setLists] = useState([])
    const [loading, setLoading] = useState('')

    async function loadLists() {
        try {
            const token = await AsyncStorage.getItem('token')
            const id = await AsyncStorage.getItem('userId')

            const response = await api.post(`/users/${id}/lists`, {}, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
            console.log(response)
            // setLists(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    async function handleLogout() {
        try {
            setLoading(true)
            const token = await AsyncStorage.getItem('token')
            const response = await api.post(`/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLoading(false)
            await AsyncStorage.clear()
            navigation.navigate('Login')
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    return (
        <View>
            { !loading ? 
                <Button
                    style={styles.button}
                    title="Logout"
                    onPress={handleLogout}
                    onLongPress={loadLists}
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