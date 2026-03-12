import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const AddRentalScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePickImage = async () => {
    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "We need permission to access your photo library",
      );
      return;
    }

    // Pick image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <View className="px-6 py-6 bg-white border-b border-slate-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-3"
        >
          <View className="bg-slate-100 p-2 rounded-full">
            <Ionicons name="arrow-back" size={18} color="#0C2B4E" />
          </View>
          <Text className="ml-3 text-slate-600 font-semibold text-sm">
            Back
          </Text>
        </TouchableOpacity>
        <Text className="text-[#0C2B4E] text-3xl font-black tracking-tight">
          Add New Rental
        </Text>
        <Text className="text-slate-400 font-medium text-sm mt-1">
          List your vehicle in 2 simple steps
        </Text>
      </View>

      <ScrollView
        className="px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130, paddingTop: 20 }}
      >
        {/* Dashed Image Upload Area */}
        <TouchableOpacity
          onPress={handlePickImage}
          className="w-full h-56 border-2 border-dashed border-slate-300 rounded-[28px] bg-gradient-to-br from-white to-slate-50 items-center justify-center mb-8 overflow-hidden"
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <View className="items-center justify-center">
              <View className="bg-gradient-to-br from-slate-100 to-slate-200 p-5 rounded-full mb-4 shadow-lg">
                <MaterialCommunityIcons
                  name="camera-plus"
                  size={36}
                  color="#0C2B4E"
                />
              </View>
              <Text className="text-[#0C2B4E] font-black text-lg">
                Upload Car Picture
              </Text>
              <Text className="text-slate-500 font-semibold text-xs mt-2">
                Professional photos attract more renters
              </Text>
              <Text className="text-slate-400 text-[10px] font-semibold mt-2 tracking-widest uppercase">
                JPG • PNG • HEIC
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Car Name Input */}
        <View className="bg-white p-6 rounded-[24px] shadow-sm mb-8 border border-slate-200">
          <View className="flex-row items-center mb-4">
            <View className="bg-slate-100 p-2 rounded-full">
              <MaterialCommunityIcons name="pencil" size={16} color="#0C2B4E" />
            </View>
            <Text className="ml-3 text-[#0C2B4E] font-black text-sm">
              Car Name
            </Text>
          </View>
          <TextInput
            placeholder="e.g. Tesla Model 3"
            placeholderTextColor="#cbd5e1"
            className="bg-slate-50 px-4 py-3 rounded-xl text-[#0C2B4E] font-semibold border border-slate-200"
          />
        </View>

        {/* Rental Period */}
        <View className="bg-white p-6 rounded-[24px] shadow-sm mb-8 border border-slate-200">
          <View className="flex-row items-center mb-5">
            <View className="bg-slate-100 p-2 rounded-full">
              <Ionicons name="calendar" size={16} color="#0C2B4E" />
            </View>
            <Text className="ml-3 text-[#0C2B4E] font-black text-sm">
              Availability Period
            </Text>
          </View>
          <View className="flex-row space-x-3">
            <View className="flex-1 bg-gradient-to-br from-slate-50 to-white p-4 rounded-[18px] border border-slate-200">
              <Text className="text-slate-500 text-[9px] font-black uppercase tracking-wide">
                Start Date
              </Text>
              <Text className="text-[#0C2B4E] font-bold text-base mt-2">
                Today
              </Text>
            </View>
            <View className="flex-1 bg-gradient-to-br from-slate-50 to-white p-4 rounded-[18px] border border-slate-200">
              <Text className="text-slate-500 text-[9px] font-black uppercase tracking-wide">
                End Date
              </Text>
              <Text className="text-slate-400 font-semibold text-base mt-2">
                Ongoing
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View className="absolute bottom-6 left-6 right-6">
        <TouchableOpacity
          onPress={() => router.push("(offers)/Screen2")}
          activeOpacity={0.85}
          className="bg-[#0C2B4E] h-16 rounded-[20px] items-center justify-center shadow-2xl flex-row"
        >
          <Ionicons name="arrow-forward" size={22} color="white" />
          <Text className="text-white font-black text-base ml-3 tracking-wide">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddRentalScreen;
