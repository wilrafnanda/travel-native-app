import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 1. Header Area */}
      <View className="px-6 pt-2 pb-4 bg-white shadow-sm shadow-slate-200 flex-row justify-between items-center">
        <Text className="text-xl font-black text-slate-900 tracking-tight">Profile</Text>
        {/* <TouchableOpacity className="bg-slate-100 p-2 rounded-xl">
          <Ionicons name="settings-outline" size={20} color="#1e293b" />
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* 2. User Hero Section */}
        <View className="items-center mt-8 px-6">
          <View className="relative">
            <View className="p-1 rounded-full border-2 border-slate-200">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200&auto=format&fit=crop' }}
                className="w-24 h-24 rounded-full"
              />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-slate-900 p-2 rounded-full border-4 border-slate-50">
              <Ionicons name="camera" size={14} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text className="text-2xl font-black text-slate-900 mt-4">John Kamga</Text>
          <Text className="text-slate-500 font-medium">
            <Text>Douala, </Text>
            <Text className="text-slate-900">Cameroon</Text>
          </Text>
        </View>

        {/* 3. Stats Bar */}
        <View className="flex-row justify-between px-6 mt-8">
          <StatBox label="Trips" value="24" />
          <StatBox label="Rating" value="4.9" icon="star" />
          <StatBox label="Credits" value="$120" />
        </View>

        {/* 4. Settings Groups */}
        <View className="mt-10 px-6 pb-10">
          <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Account Settings
          </Text>
          
          <View className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
            <MenuOption 
              icon="person-outline" 
              label="Personal Information" 
            />
            <MenuOption 
              icon="card-outline" 
              label="Payment Methods" 
            />
            <MenuOption 
              icon="time-outline" 
              label="Rental History" 
            />
            <MenuOption 
              icon="notifications-outline" 
              label="Notifications" 
              isLast 
            />
          </View>

          <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-8 mb-4">
            Support
          </Text>
          
          <View className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm">
            <MenuOption 
              icon="help-circle-outline" 
              label="Help Center" 
            />
            <MenuOption 
              icon="shield-checkmark-outline" 
              label="Privacy Policy" 
              isLast 
            />
          </View>

          {/* Logout Button */}
          <TouchableOpacity className="mt-8 bg-red-50 py-5 rounded-[24px] items-center border border-red-100">
            <Text className="text-red-500 font-bold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper: Statistics Box
const StatBox = ({ label, value, icon }) => (
  <View className="bg-white w-[30%] p-4 rounded-3xl items-center border border-slate-100 shadow-sm">
    <View className="flex-row items-center mb-1">
      {icon && <Ionicons name={icon} size={12} color="#fbbf24" style={{ marginRight: 4 }} />}
      <Text className="text-slate-900 text-lg font-black">{value}</Text>
    </View>
    <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">{label}</Text>
  </View>
);

// Helper: Menu Option Row
const MenuOption = ({ icon, label, isLast }) => (
  <TouchableOpacity 
    className={`flex-row items-center px-6 py-5 ${!isLast ? 'border-b border-slate-50' : ''}`}
    activeOpacity={0.6}
  >
    <View className="bg-slate-50 p-2.5 rounded-xl mr-4">
      <Ionicons name={icon} size={20} color="#64748b" />
    </View>
    <Text className="flex-1 text-slate-800 font-bold text-base">{label}</Text>
    <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
  </TouchableOpacity>
);