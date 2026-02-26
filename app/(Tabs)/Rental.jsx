
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useRouter } from "expo-router";
import CustomHeader from '../../component/CustomHeader';


import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Rental() {
  const router = useRouter();

  return (
    // Use a slightly off-white background for a premium feel
    <SafeAreaView className="flex-1 bg-slate-50 px-6">
      <CustomHeader />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        className=""
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* 1. Refined Dashboard Header */}
        <View className="mt-8 mb-8">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">
                Overview
              </Text>
              <Text className="text-3xl font-black text-slate-900 tracking-tight">
                Rental Hub
              </Text>
            </View>
            <TouchableOpacity className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
              <Ionicons name="notifications-outline" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>
          <Text className="text-slate-500 text-base mt-2 leading-6">
            Optimize your fleet performance and track active guest bookings.
          </Text>
        </View>

        {/* 2. High-Impact Call-to-Action */}
        <View className="mb-10">
          <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => router.push("../(rentalScreens)/Rentals")}
            className="bg-[#0C2B4E] rounded-[32px] p-6 shadow-xl shadow-blue-900/20 overflow-hidden relative"
          >
            {/* Subtle Abstract Background Decoration */}
            <View className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full" />
            
            <View className="flex-row justify-between items-start">
              <View className="flex-1 pr-4">
                <View className="bg-blue-400/20 self-start px-3 py-1 rounded-full mb-3">
                  <Text className="text-blue-200 text-[10px] font-bold uppercase tracking-tighter">
                    Marketplace
                  </Text>
                </View>
                <Text className="text-white text-2xl font-bold mb-2">Available Vehicles</Text>
                <Text className="text-blue-100/70 text-sm leading-5 mb-6">
                  Explore premium vehicles available for immediate booking nearby.
                </Text>
                <View className="bg-white self-start px-6 py-3 rounded-xl">
                  <Text className="text-[#0C2B4E] font-bold">Browse Rentals</Text>
                </View>
              </View>
              <View className="bg-white/10 p-4 rounded-3xl">
                <FontAwesome5 name="car-side" size={32} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* 3. Section Title with Minimalist Divider */}
        <View className="flex-row items-center mb-6">
          <Text className="font-bold text-xl text-slate-800 mr-4">Fleet Management</Text>
          <View className="h-[1px] flex-1 bg-slate-200" />
        </View>

        {/* 4. Action List with Consistent Card Design */}
        <View className="gap-y-4">
          <ManagementCard
            title='Your Rental Offers'
            description='Manage the vehicles you are renting out'
            onPress={() => router.push("../(rentalScreens)/RentalOffers")}
            icon='key'
            badge="12 Cars"
          />

          <ManagementCard
            title='Ongoing Rentals'
            description='Track active bookings and time remaining'
            onPress={() => router.push("../(rentalScreens)/OngoingRentals")}
            icon='user-clock'
            badge="Active"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// Internal component for professional list items
const ManagementCard = ({ title, description, onPress, icon, badge }) => (
  <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.7}
    className="bg-white p-5 rounded-3xl flex-row items-center border border-slate-100 shadow-sm"
  >
    <View className="bg-slate-50 p-4 rounded-2xl mr-4">
      <FontAwesome5 name={icon} size={20} color="#0C2B4E" />
    </View>
    <View className="flex-1">
      <View className="flex-row items-center">
        <Text className="font-bold text-slate-900 text-lg mr-2">{title}</Text>
        {badge && (
          <View className="bg-slate-100 px-2 py-0.5 rounded-md">
            <Text className="text-slate-500 text-[10px] font-bold uppercase">{badge}</Text>
          </View>
        )}
      </View>
      <Text className="text-slate-500 text-xs mt-1">{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
  </TouchableOpacity>
);
