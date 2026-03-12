import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View>
          <Text className="text-navy-900 font-black text-[10px] tracking-widest opacity-60">DASHBOARD</Text>
          <Text className="text-navy-900 text-3xl font-black">Your Offers</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push('(offers)/Screen1')}
        className="bg-[#0C2B4E] w-14 h-14 rounded-full justify-center items-center shadow-lg">
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View className="flex-row px-6 space-x-4">
        <View className="flex-1 bg-[#0C2B4E] p-6 rounded-[30px]">
          <Text className="text-white text-3xl font-black">3</Text>
          <Text className="text-slate-400 text-[10px] font-bold mt-1">ACTIVE LISTINGS</Text>
        </View>
        <View className="flex-1 bg-white p-6 rounded-[30px] shadow-sm border border-slate-100">
          <Text className="text-[#0C2B4E] text-3xl font-black">$450</Text>
          <Text className="text-slate-500 text-[10px] font-bold mt-1">PENDING EARN</Text>
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-row bg-slate-200 m-6 rounded-2xl p-1">
        {['Active', 'Rented', 'Pending'].map((tab) => (
          <TouchableOpacity 
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl items-center ${activeTab === tab ? 'bg-white shadow-sm' : ''}`}
          >
            <Text className={`font-bold ${activeTab === tab ? 'text-[#0C2B4E]' : 'text-slate-500'}`}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List Header */}
      <View className="flex-row justify-between px-6 mb-2">
        <Text className="text-slate-400 font-black text-[10px]">CURRENT LISTINGS</Text>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-[#0C2B4E] font-bold mr-1">Sort by</Text>
          <Ionicons name="chevron-down" size={14} color="#0C2B4E" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={LISTING_DATA}
        renderItem={({ item }) => <ListingItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Nav */}
     
    </SafeAreaView>
  );
};

const ListingItem = ({ item }) => (
  <View className="bg-white mx-6 mb-4 rounded-[25px] p-4 shadow-sm border border-slate-50">
    <View className="flex-row">
      <View className="w-24 h-24 relative">
        <View className="bg-slate-100 w-full h-full rounded-full items-center justify-center">
          <Ionicons name="car-outline" size={40} color="#cbd5e1" />
        </View>
        {item.status === 'RENTED' && (
          <View className="absolute bottom-0 w-full bg-indigo-500 py-1 rounded-b-full items-center">
            <Text className="text-white text-[8px] font-black">RENTED</Text>
          </View>
        )}
      </View>

      <View className="flex-1 ml-4">
        <View className="flex-row justify-between">
          <Text className="text-[#0C2B4E] text-lg font-black">{item.name}</Text>
          <View className="items-end">
            <Text className="text-[#0C2B4E] text-lg font-black">${item.price}</Text>
            <Text className="text-slate-400 text-[8px] font-bold uppercase">/ DAY</Text>
          </View>
        </View>
        <Text className="text-slate-400 text-[11px] font-semibold mt-1">{item.specs}</Text>
        
        {item.statusMessage && (
          <View className="flex-row items-center mt-2">
            <View className={`w-2 h-2 rounded-full mr-2 ${item.status === 'PENDING' ? 'bg-amber-500' : 'bg-indigo-500'}`} />
            <Text className={`text-[11px] font-bold ${item.status === 'PENDING' ? 'text-amber-500' : 'text-indigo-500'}`}>
              {item.statusMessage}
            </Text>
          </View>
        )}

        <View className="flex-row mt-4 space-x-2">
          <TouchableOpacity className="flex-1 bg-slate-100 py-3 rounded-xl items-center">
            <Text className="text-[#0C2B4E] font-bold">Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-50 p-3 rounded-xl">
            <Ionicons name="trash" size={18} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const NavIcon = ({ icon, label, active }) => (
  <TouchableOpacity className="items-center">
    <View className={`p-2 rounded-xl ${active ? 'bg-slate-100' : ''}`}>
      <Ionicons name={icon} size={24} color={active ? "#0C2B4E" : "#94a3b8"} />
    </View>
    <Text className={`text-[10px] font-bold mt-1 ${active ? 'text-[#0C2B4E]' : 'text-slate-400'}`}>{label}</Text>
  </TouchableOpacity>
);

const LISTING_DATA = [
  { id: '1', name: 'Tesla Model 3', price: '85', specs: 'Electric • Automatic • 5 Seats', status: 'ACTIVE' },
  { id: '2', name: 'Mercedes C-Class', price: '110', specs: 'Returns in 2 days', status: 'RENTED', statusMessage: 'Returns in 2 days' },
  { id: '3', name: 'Ford Explorer', price: '15', specs: 'SUV • Automatic • 7 Seats', status: 'PENDING', statusMessage: 'Approval Pending' },
];

export default DashboardScreen;