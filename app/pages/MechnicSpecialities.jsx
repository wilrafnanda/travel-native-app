import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MechanicSpecialities = () => {
  const router = useRouter();
  
  // State for multi-selection of services
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "Oil Change", "AC Repair", 
    "Brake Work", "Tire Service", 
    "Diagnostics", "Detailing"
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* --- Simple Header --- */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <FontAwesome5 name="chevron-left" size={18} color="#1e293b" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-800">Mechanic Registration</Text>
        <View className="w-10" /> 
      </View>

      <ScrollView className="flex-1 px-6 mt-4" showsVerticalScrollIndicator={false}>
        {/* --- Title Section --- */}
        <Text className="text-3xl font-extrabold text-slate-900 mb-2">Specialities</Text>
        <Text className="text-slate-500 leading-5 mb-8">
          Define your expertise and the services you offer to help us match you with relevant customers.
        </Text>

        {/* --- Form Section --- */}
        <View className="gap-y-6">
          
          {/* Specialization Picker */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Primary Specialization</Text>
            <TouchableOpacity className="flex-row items-center justify-between bg-slate-100 rounded-lg px-4 border border-slate-200 h-[56px]">
              <Text className="text-slate-400">Select specialization</Text>
              <MaterialCommunityIcons name="chevron-down" size={20} color="#94a3b8" />
            </TouchableOpacity>
          </View>

          {/* Years of Experience Input */}
          <View>
            <Text className="text-slate-800 font-bold mb-2">Years of Experience</Text>
            <View className="flex-row items-center bg-slate-100 rounded-lg px-4 border border-slate-200 h-[56px]">
              <TextInput 
                placeholder="e.g. 5" 
                placeholderTextColor="#94a3b8"
                keyboardType="numeric"
                className="flex-1 text-slate-900 h-full"
              />
              <MaterialCommunityIcons name="wrench-outline" size={20} color="#94a3b8" />
            </View>
          </View>

          {/* Services Selection Grid */}
          <View>
            <Text className="text-slate-800 font-bold mb-4">Additional Services</Text>
            <View className="flex-row flex-wrap justify-between">
              {services.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <TouchableOpacity 
                    key={service}
                    onPress={() => toggleService(service)}
                    style={{ width: '48%' }}
                    className={`mb-4 py-4 items-center justify-center rounded-xl border ${
                      isSelected 
                      ? 'bg-slate-200 border-slate-400' 
                      : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <Text className={`font-bold text-sm ${
                      isSelected ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {service}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

        </View>

        {/* --- Action Bar --- */}
        <View className="mt-8 mb-10">
          <TouchableOpacity 
            onPress={() => router.push("/pages/Finaldetails")}
            className="bg-[#0c2144] flex-row items-center justify-center py-5 rounded-full shadow-lg"
            activeOpacity={0.9}
          >
            <Text className="text-white font-bold text-lg mr-2">Continue to Certification</Text>
            <FontAwesome5 name="arrow-right" size={16} color="white" />
          </TouchableOpacity>
          
          <Text className="text-slate-400 text-center text-[10px] mt-6 uppercase tracking-widest">
            <Text>Contact Info • </Text>
            <Text className="text-slate-900 font-bold">Specialities • </Text>
            <Text>Certification</Text>
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default MechanicSpecialities;