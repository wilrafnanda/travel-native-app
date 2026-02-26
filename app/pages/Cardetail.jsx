import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { router, useRouter } from 'expo-router';

const CarDetailScreen = () => {
    const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      
      <ScrollView showsVerticalScrollIndicator={false} className="mb-24">
        {/* --- Image Section with Overlay Buttons --- */}
        <View className="relative h-[400px] bg-slate-900">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop' }} 
            className="w-full h-full opacity-90"
            resizeMode="cover"
          />
          
          {/* Header Icons */}
          <SafeAreaView className="absolute top-4 left-4 right-4 flex-row justify-between">
            <TouchableOpacity onPress={() => router.back()} className="bg-black/20 p-3 rounded-full backdrop-blur-md">
              <FontAwesome5 name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
            
            <View className="flex-row gap-x-3">
              <TouchableOpacity className="bg-black/20 p-3 rounded-full backdrop-blur-md">
                <FontAwesome5 name="share-alt" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-black/20 p-3 rounded-full backdrop-blur-md">
                <FontAwesome5 name="heart" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          {/* Title Overlay */}
          <View className="absolute bottom-8 left-6">
            <Text className="text-white text-4xl font-extrabold tracking-tight">Luxury Sedan</Text>
            <Text className="text-slate-300 font-bold uppercase tracking-widest text-xs mt-2">
              2024  •  Performance Edition
            </Text>
          </View>
        </View>

        {/* --- Features Grid --- */}
        <View className="flex-row justify-between px-6 -mt-6">
           <FeatureBox icon="users" label="4 Seats" />
           <FeatureBox icon="snowflake" label="Auto A/C" />
           <FeatureBox icon="shopping-bag" label="2 Bags" />
        </View>

        {/* --- Description --- */}
        <View className="px-6 mt-8">
          <Text className="text-slate-900 text-lg font-bold mb-3">Description</Text>
          <Text className="text-slate-500 leading-6 text-base">
            Experience the future of driving with a minimalist interior, premium sound system, 
            and panoramic glass roof. This vehicle offers unmatched acceleration and handling 
            for an exceptional journey.
          </Text>
        </View>
      </ScrollView>

      {/* --- Fixed Bottom Bar --- */}
      <View className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 pt-4 pb-8 flex-row justify-between items-center">
        <View>
          <Text className="text-slate-400 text-xs font-bold uppercase">Ride Fare</Text>
          <View className="flex-row items-baseline">
            <Text className="text-slate-900 text-3xl font-extrabold">$42.00</Text>
            <Text className="text-slate-400 font-bold ml-1">/trip</Text>
          </View>
          <View className="flex-row items-center mt-1">
             <FontAwesome5 name="star" size={10} color="#fbbf24" solid />
             <Text className="text-slate-900 font-bold text-xs ml-1">4.9</Text>
             <Text className="text-slate-400 text-[10px] ml-1">(124 Reviews)</Text>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-slate-900 flex-row items-center justify-center py-4 px-8 rounded-2xl shadow-xl"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold text-lg mr-2">Select This Car</Text>
          <FontAwesome5 name="arrow-right" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Helper Component for the Feature Boxes
const FeatureBox = ({ icon, label }) => (
  <View className="bg-slate-50 w-[30%] py-5 rounded-3xl items-center shadow-sm border border-slate-100">
    <View className="bg-white p-2 rounded-xl mb-2">
       <FontAwesome5 name={icon} size={20} color="#0f172a" />
    </View>
    <Text className="text-slate-900 font-bold text-xs">{label}</Text>
  </View>
);

export default CarDetailScreen;