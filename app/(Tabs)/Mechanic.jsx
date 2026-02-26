import React from 'react';
import { View, Text, TouchableOpacity,  ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CustomHeader from '../../component/CustomHeader';
import { useEffect } from 'react';

const MechanicOnboarding = () => {
  const router = useRouter();
  
  
 
  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-4">
      <CustomHeader/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="">
        
        {/* --- 1. Illustration Header --- */}
        <View className="items-center mt-12 mb-8">
          <View className="relative">
            {/* Main Circle */}
            <View className="w-48 h-48 bg-slate-900 rounded-full items-center justify-center border-8 border-white shadow-xl">
               <FontAwesome5 name="briefcase" size={60} color="white" />
            </View>
            {/* Small Floating Icon Badge */}
            <View className="absolute bottom-2 right-2 bg-orange-500 p-3 rounded-full border-4 border-white shadow-md">
               <FontAwesome5 name="wrench" size={20} color="white" />
            </View>
          </View>
          
          <Text className="text-2xl font-extrabold text-slate-900 mt-8 text-center">
            Not Yet Registered
          </Text>
          <Text className="text-slate-500 text-center mt-3 leading-5 px-4">
            Become a certified mechanic on TransitFlow to offer your repair services and grow your business.
          </Text>
        </View>

        {/* --- 2. Benefits List --- */}
        <View className="gap-y-4">
          <BenefitCard 
            icon="check-decagram" 
            title="Certified Badge" 
            description="Gain trust with users through verification"
            iconColor="#10b981" // Emerald
          />
          <BenefitCard 
            icon="trending-up" 
            title="Business Growth" 
            description="Access more customers in your local area"
            iconColor="#3b82f6" // Blue
          />
        </View>

        {/* --- 3. Footer CTA --- */}
        <View className="mt-auto mb-10 pt-8">
          <TouchableOpacity 
            onPress={() => router.push("/pages/register-mechanic")}
            className="bg-slate-900 flex-row items-center justify-center py-4 rounded-2xl shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-lg mr-2">Register as Mechanic</Text>
            <FontAwesome5 name="arrow-right" size={16} color="white" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// Sub-component for Benefit Cards
const BenefitCard = ({ icon, title, description, iconColor }) => (
  <View className="flex-row items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
    <View style={{ backgroundColor: `${iconColor}20` }} className="p-3 rounded-xl">
      <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
    </View>
    <View className="ml-4 flex-1">
      <Text className="text-slate-900 font-bold text-base">{title}</Text>
      <Text className="text-slate-500 text-xs">{description}</Text>
    </View>
  </View>
);

export default MechanicOnboarding;