import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MechanicFinalDetails = () => {
  const router = useRouter();
  
  // State for service area tags
  const [tags, setTags] = useState(['Brooklyn', 'Manhattan', 'Queens']);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
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
        <Text className="text-3xl font-extrabold text-slate-900 mb-2">Final Details</Text>
        <Text className="text-slate-500 leading-5 mb-8">
          Complete your profile to establish trust and reach more customers in your area.
        </Text>

        {/* --- Form Fields --- */}
        <View className="gap-y-6">
          
          {/* Workshop Name Verification */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Workshop Name</Text>
            <View className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200">
              <TextInput 
                placeholder="e.g. Master Motors Workshop" 
                placeholderTextColor="#94a3b8"
                className="flex-1 py-4 text-slate-900"
              />
              <MaterialCommunityIcons name="storefront" size={20} color="#94a3b8" />
            </View>
          </View>

          {/* Professional Bio (Multi-line) */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Professional Bio</Text>
            <View className="bg-slate-100 rounded-lg px-4 border border-slate-200 min-h-[120px] pt-2">
              <TextInput 
                placeholder="Briefly describe your experience and work ethic..." 
                placeholderTextColor="#94a3b8"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="text-slate-900"
              />
            </View>
          </View>

          {/* Service Areas with Tags */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Service Areas</Text>
            <View className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200 mb-3">
              <TextInput 
                placeholder="Add neighborhood or city..." 
                placeholderTextColor="#94a3b8"
                className="flex-1 py-4 text-slate-900"
              />
              <TouchableOpacity className="bg-[#0c2144] p-2 rounded-md">
                <FontAwesome5 name="plus" size={12} color="white" />
              </TouchableOpacity>
            </View>
            
            {/* Horizontal Tags Container */}
            <View className="flex-row flex-wrap gap-2">
              {tags.map((tag) => (
                <View key={tag} className="flex-row items-center bg-slate-50 border border-slate-200 px-3 py-2 rounded-full">
                  <Text className="text-slate-700 text-xs font-medium mr-2">{tag}</Text>
                  <TouchableOpacity onPress={() => removeTag(tag)}>
                    <MaterialCommunityIcons name="close" size={14} color="#64748b" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Document Upload Area (Dashed Border) */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Certifications & Licenses</Text>
            <TouchableOpacity 
              style={{ borderStyle: 'dashed' }}
              className="bg-slate-50 border-2 border-slate-200 rounded-xl py-10 items-center justify-center"
            >
              <View className="bg-slate-200 p-4 rounded-full mb-3">
                <MaterialCommunityIcons name="cloud-upload" size={32} color="#0c2144" />
              </View>
              <Text className="text-slate-900 font-bold">Upload document photos</Text>
              <Text className="text-slate-400 text-xs mt-1">PNG, JPG or PDF up to 10MB</Text>
            </TouchableOpacity>

            {/* Uploaded File Preview */}
            <View className="flex-row items-center bg-white border border-slate-100 rounded-lg p-4 mt-4 shadow-sm">
              <FontAwesome5 name="file-pdf" size={20} color="#64748b" />
              <Text className="flex-1 ml-3 text-slate-600 text-xs font-medium">ASE_Certification.pdf</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons name="delete-outline" size={20} color="#ef4444" />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        {/* --- Bottom Action --- */}
        <View className="mt-12 mb-10">
          <TouchableOpacity 
            onPress={() => router.push("/pages/MechanicDashboard")}
            className="bg-[#0c2144] flex-row items-center justify-center py-5 rounded-full shadow-lg"
            activeOpacity={0.9}
          >
            <Text className="text-white font-bold text-lg mr-2">Complete Registration</Text>
            <MaterialCommunityIcons name="check-circle" size={18} color="white" />
          </TouchableOpacity>
          
          <Text className="text-slate-400 text-center text-[10px] mt-6 uppercase tracking-widest">
            Final Step • Verifying Credentials
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default MechanicFinalDetails;