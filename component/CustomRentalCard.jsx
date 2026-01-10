import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { FontAwesome6 } from '@expo/vector-icons'

export default function CustomRentalCard({title,description,buttonTitle, icon, iconColor, onPress}) {
  return (
   <View className="p-5 bg-white mt-5 mb-5 rounded-[20px]">
        <View className="flex flex-row gap-5 justify-between items-center p-4 mb-4">
            <View className="h-[50px] w-[50px] bg-gray-300 flex items-center justify-center rounded-full">
                 <FontAwesome6 name={icon} size={18} color={iconColor}/>
            </View>
            <View>
            <Text className="text-secondary font-extrabold text-[2rem] mt-8 mb-3">
                {title}
            </Text>
            <Text className="text-secondary text-xl w-[200px] leading-8">
                {description}
            </Text>
            </View>
        </View>
            <CustomButton
            title={buttonTitle}
            containerStyle=" bg-secondary rounded-full"
            onPress={onPress}
            />
    </View>
  )
}