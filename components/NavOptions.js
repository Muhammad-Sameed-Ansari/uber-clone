import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: images.get_a_ride,
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: images.order_food,
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {
    const navigation = useNavigation()

    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={{
                        padding: 4,
                        paddingLeft: 12,
                        paddingBottom: 16,
                        paddingTop: 8,
                        backgroundColor: '#EAEAEA',
                        shadowColor: '#CECECE',
                        shadowOpacity: 0.5,
                        shadowOffset: {
                            height: 1,
                            width: 1
                        },
                        margin: 8,
                        height: '100%'
                    }}
                >
                    <View>
                        <Image 
                            style={{ width: 130, height: 130, resizeMode: 'contain' }}
                            source={item.image}
                        />
                        <Text
                            style={{
                                marginTop: 4,
                                fontSize: '16',
                                fontWeight: '700'
                            }}
                        >{item.title}</Text>
                        <Icon 
                            style={{
                                padding: 8,
                                backgroundColor: 'black',
                                marginTop: 8,
                                width: 40,
                                borderRadius: 80
                            }}
                            name='arrowright'
                            color='white'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions