import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

export default function CustomCard({title, buttonTitle, description,tag,icon, onPress}) {
  return (
    <View className=" w-ful bg-secondary p-[20px] rounded-[20px] shadow-slate-600">
        <View className=" flex flex-row justify-between items-center">
            <View className="h-[50px] w-[50px] bg-gray-400 flex items-center justify-center rounded-full">
                <FontAwesome6 name={icon} size={25} color="#ffffff"/>
            </View>
            <Text className="text-white font-bold text-xl">
                {tag}
            </Text>
        </View>
        <Text className="text-white font-extrabold text-[2rem] mt-8">{title}</Text>
        <Text className="text-gray-400 font-extrabold text-[1.2rem] mt-5 w-[220px] leading-8 ">
            {description}
        </Text>
        
        <TouchableOpacity className="w-full bg-white h-[80px] flex items-center justify-center rounded-[20px] mt-10 py-[20px]" onPress={onPress}>
            <Text className="font-extrabold text-secondary text-2xl">
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    </View>
  )
}