import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

export default function QuickAccess({title,icon}) {
  return (
    <TouchableOpacity className=" h-[100px] w-[150px] p-4 bg-white rounded-[15px] flex justify-between">
      <FontAwesome6 name={icon} size={30}/>
      <Text className="font-bold">{title}</Text>
    </TouchableOpacity>
  )
}