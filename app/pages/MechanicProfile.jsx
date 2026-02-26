import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MechanicProfile = () => {
  const router = useRouter();
  const isMechanic = true;

  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        
        {/* --- Header Section (Dark Blue) --- */}
        <View className="bg-[#0c2144] pt-4 pb-20 px-6 rounded-b-[40px] items-center">
          <SafeAreaView className="flex-row justify-between w-full" edges={['top']}>
            
            <TouchableOpacity className="bg-white/10 p-2 rounded-full">
              <Ionicons name="share-outline" size={24} color="white" />
            </TouchableOpacity>
          </SafeAreaView>

          {/* Avatar Area */}
          <View className="relative mt-2">
            <View className="p-1 rounded-full border-2 border-orange-500">
              <Image 
                source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-mechanic-illustrated_23-2148894178.jpg' }} 
                className="w-24 h-24 rounded-full"
              />
            </View>
            <View className="absolute bottom-0 right-0 bg-orange-500 p-1.5 rounded-full border-2 border-[#0c2144]">
              <MaterialCommunityIcons name="check-decagram" size={16} color="white" />
            </View>
          </View>

          <Text className="text-white text-2xl font-bold mt-4">Marcus Thompson</Text>
          
          <View className="flex-row items-center mt-1">
            <FontAwesome5 name="star" size={14} color="#fbbf24" solid />
            <Text className="text-white font-bold ml-1">4.9</Text>
            <Text className="text-slate-400 text-xs ml-1">(128 Reviews)</Text>
          </View>

          {/* Specialization Tags */}
          <View className="flex-row mt-6 gap-x-2">
            {['Engine Repair', 'AC Specialist', 'Brakes'].map((tag) => (
              <View key={tag} className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <Text className="text-white text-[10px] font-bold">{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* --- Stats Overlap Cards --- */}
        <View className="flex-row px-6 -mt-10 justify-between">
          <StatCard label="EXPERIENCE" value="12" unit="Years" />
          <StatCard label="SUCCESS RATE" value="99" unit="%" />
        </View>

        {/* --- About Section --- */}
        <View className="px-6 mt-8">
          <Text className="text-slate-900 text-lg font-extrabold mb-4">About</Text>
          <View className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
            <Text className="text-slate-500 leading-6 text-sm">
              Expert certified mechanic with over 12 years of experience specializing in high-performance engines and complex electrical diagnostics. Committed to providing fast, reliable service at your doorstep or in my workshop.
            </Text>
          </View>
        </View>

        {/* --- Service Location Section --- */}
        <View className="px-6 mt-8 mb-32">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-slate-900 text-lg font-extrabold">Service Location</Text>
            <View className="flex-row items-center">
              <Ionicons name="location" size={14} color="#f97316" />
              <Text className="text-orange-500 text-xs font-bold ml-1">Brooklyn, NY</Text>
            </View>
          </View>

          {/* Map Placeholder */}
          <View className="bg-[#f0f4f8] h-48 rounded-3xl border border-slate-200 overflow-hidden items-center justify-center relative">
            {/* Dots Pattern Placeholder */}
            <View className="absolute inset-0 opacity-10 flex-wrap flex-row">
              {Array(100).fill(0).map((_, i) => (
                <View key={i} className="w-4 h-4 rounded-full bg-slate-400 m-2" />
              ))}
            </View>
            
            <View className="bg-white p-4 rounded-full shadow-lg">
              <View className="bg-orange-100 p-3 rounded-full">
                <FontAwesome5 name="store" size={20} color="#f97316" />
              </View>
            </View>

            <View className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
              <Text className="text-[10px] font-bold text-slate-800">Radius: 15 miles available</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* --- Sticky Bottom Action Bar --- */}
      {!isMechanic && (
      <View className="absolute bottom-0 w-full bg-white/80 border-t border-slate-100 px-6 pt-4 pb-10 flex-row gap-x-4">
        <TouchableOpacity className="flex-1 bg-slate-100 py-4 rounded-2xl flex-row items-center justify-center">
          <Ionicons name="call" size={18} color="#0c2144" />
          <Text className="text-[#0c2144] font-bold ml-2">Call Now</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="flex-[2] bg-[#0c2144] py-4 rounded-2xl flex-row items-center justify-center shadow-lg shadow-blue-900/30">
          <Ionicons name="calendar" size={18} color="white" />
          <Text className="text-white font-bold ml-2">Book Service</Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

// Helper Component for Stats
const StatCard = ({ label, value, unit }) => (
  <View className="bg-white w-[46%] p-5 rounded-3xl shadow-md items-center border border-slate-50">
    <Text className="text-slate-400 text-[10px] font-bold tracking-widest">{label}</Text>
    <View className="flex-row items-baseline mt-1">
      <Text className="text-slate-900 text-2xl font-black">{value}</Text>
      <Text className="text-slate-500 text-xs font-bold ml-1">{unit}</Text>
    </View>
  </View>
);

export default MechanicProfile;