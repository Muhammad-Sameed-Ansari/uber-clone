import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import NavOptions from '../components/NavOptions'


const HomeScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%'}}>
            <View style={{ padding: 15}}>
                <Image 
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={images.uber_logo}
                />
            
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})