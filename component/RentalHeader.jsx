import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'

export default function RentalHeader() {
  return (
    <View className="w-full mb-4">
      <View className="w-full flex flex-row gap-2 items-center">
        <FontAwesome5 name="map-marker-alt" size={15} color={"#0C2B4E"}/>
        <Text className="text-4xl font-bold color-secondary ">My Location</Text>
      </View>
      
    </View>
  )
}