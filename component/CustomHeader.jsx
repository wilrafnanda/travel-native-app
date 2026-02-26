import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function CustomHeader() {
  return (
    <View className="w-full flex flex-row items-center justify-between mb-5 pt-4">
        <View className="flex flex-row items-center gap-2">
            <View className="h-10 w-10 bg-secondary flex items-center justify-center rounded-full">
              <FontAwesome6 name="car" size={17} color="#ffffff"/>
            </View>
            <Text className="text-secondary text-2xl font-extrabold ">
              TransitFlow
            </Text>
        </View>
        <View className="flex flex-row items-center gap-5">
          <TouchableOpacity>
            <FontAwesome6 name="bell" size={24}/>
          </TouchableOpacity>

          
          <View className="h-12 w-12 p-2 bg-[color:'#dee1e5'] flex items-center justify-center rounded-full">
            <TouchableOpacity  onPress={()=> router.replace('../pages/Profile')}>
              <FontAwesome6 name="user-circle" size={20} color="#0C2B4E"/>
            </TouchableOpacity>
          </View>
        </View>
          
      </View>
  )
}