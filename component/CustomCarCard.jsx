import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CustomCarCard({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} 
  className="bg-white mt-5 rounded-[20px] overflow-hidden shadow-sm border border-gray-100"
  activeOpacity={0.9}
>
  {/* Image Section */}
  <View className="relative">
    <Image 
      source={{ uri: 'https://picsum.photos/400/250' }} 
      className="w-full h-[160px]"
      resizeMode="cover" 
    />
    {/* Category Badge - Absolute Positioned over Image */}
    <View className="absolute top-3 left-3 bg-brand/90 px-3 py-1 rounded-full">
      <Text className="text-white text-xs font-bold uppercase">Electric</Text>
    </View>
  </View>

  {/* Info Section */}
  <View className="p-4">
    <View className="flex-row justify-between items-start">
      <View className="flex-1">
        <Text className="font-bold text-xl text-slate-800" numberOfLines={1}>
          Tesla Model 3
        </Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-gray-500 text-sm">Automatic • 5 Seats</Text>
        </View>
      </View>

      <View className="items-end">
        <View className="flex-row items-baseline">
          <Text className="font-bold text-brand text-xl">55,000</Text>
          <Text className="text-gray-400 text-xs ml-1">CFA</Text>
        </View>
        <Text className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">per day</Text>
      </View>
    </View>

    {/* Optional: Add a subtle divider and location */}
    <View className="mt-3 pt-3 border-t border-gray-50 flex-row items-center">
        <FontAwesome5 name="map-marker-alt" size={12} color="#94a3b8" />
        <Text className="text-slate-400 text-xs ml-2">Akwa, Douala</Text>
    </View>
  </View>
</TouchableOpacity>
  )
}