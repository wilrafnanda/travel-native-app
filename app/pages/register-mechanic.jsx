import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MechanicBasicInfo = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* --- Header --- */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <FontAwesome5 name="chevron-left" size={18} color="#1e293b" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-800">Mechanic Registration</Text>
        <View className="w-10" /> 
      </View>

      <ScrollView className="flex-1 px-6 mt-4" showsVerticalScrollIndicator={false}>
        {/* --- Title & Intro --- */}
        <Text className="text-3xl font-extrabold text-slate-900 mb-2">Basic Info</Text>
        <Text className="text-slate-500 leading-5 mb-8">
          Please provide your contact and workshop details to get started with your application.
        </Text>

        {/* --- Form Fields --- */}
        <View className="gap-y-6">
          
          {/* Workshop Name */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Workshop Name</Text>
            <View className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200">
              <TextInput 
                placeholder="e.g. Precision Auto Care" 
                placeholderTextColor="#94a3b8"
                className="flex-1 py-4 text-slate-900"
              />
              <MaterialCommunityIcons name="storefront-outline" size={20} color="#94a3b8" />
            </View>
          </View>

          {/* Phone Number Group */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Phone Number</Text>
            <View className="flex-row gap-x-3">
              {/* Country Code Picker */}
              <TouchableOpacity className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200 h-[56px]">
                {/* Ensuring the +1 is wrapped in a Text component */}
                <Text className="text-slate-900 font-medium">+1</Text>
                <FontAwesome5 name="chevron-down" size={10} color="#64748b" style={{ marginLeft: 8 }} />
              </TouchableOpacity>
              
              {/* Number Input Container */}
              <View className="flex-1 bg-slate-100 rounded-lg px-4 border border-slate-200 h-[56px] justify-center">
                <TextInput 
                  placeholder="(555) 000-0000" 
                  placeholderTextColor="#94a3b8"
                  keyboardType="phone-pad"
                  className="text-slate-900 h-full"
                />
              </View>
            </View>
          </View>

          {/* Business Address */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Business Address</Text>
            <View className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200">
              <TextInput 
                placeholder="Street address, city, state" 
                placeholderTextColor="#94a3b8"
                className="flex-1 py-4 text-slate-900"
              />
              <TouchableOpacity>
                <MaterialCommunityIcons name="map-marker" size={22} color="#0f172a" />
              </TouchableOpacity>
            </View>
            <Text className="text-slate-400 text-[11px] mt-2 italic">
              Tap the icon to use your current location
            </Text>
          </View>

        </View>

        {/* --- Bottom Action --- */}
        <View className="mt-12 mb-10">
          <TouchableOpacity 
            onPress={() => router.push("/pages/MechnicSpecialities")}
            className="bg-[#0c2144] flex-row items-center justify-center py-5 rounded-full shadow-lg"
            activeOpacity={0.9}
          >
            <Text className="text-white font-bold text-lg mr-2">Continue to Services</Text>
            <FontAwesome5 name="arrow-right" size={16} color="white" />
          </TouchableOpacity>
          
          <Text className="text-slate-400 text-center text-[10px] mt-6 uppercase tracking-widest">
            Step 1: Contact Info • Step 2: Certification • Step 3: Photos
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default MechanicBasicInfo;