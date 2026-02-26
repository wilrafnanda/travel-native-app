import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = ({ title, value, onChangeText, placeholder, containerStyle,...props}) => {
  return (
    <View className={`space-y-2 ${containerStyle || ''}`}>
      <Text className="text-text-dark font-semibold mt-4 mx-2 text-lg">{title}</Text>
      <View className={`w-full h-16 border rounded-lg px-3 justify-center bg-white focus:border-primary border-gray-300`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          className={`w-full text-text-dark`}
        />
      </View>
    </View>
  )
}

export default InputField