import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyle,
  onPress,
  
  
}) => {
  return (
    <TouchableOpacity
      className={` min-h-[62px] justify-center items-center rounded-xl ${containerStyle || ""}`}
      onPress={onPress}
      
    >
      <Text className={`
         text-white font-extrabold text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
