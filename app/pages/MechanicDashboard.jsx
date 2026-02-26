import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function MechanicDashboard() {
  // Mock data for new service requests
  const jobRequests = [
    { id: '1', service: 'Brake Pad Replacement', car: 'Toyota Camry', distance: '2.5 km', price: 'FCFA 15,000' },
    { id: '2', service: 'Engine Diagnostics', car: 'Mercedes C300', distance: '4.1 km', price: 'FCFA 25,000' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 1. Dashboard Header */}
      <View className="px-6 pt-8 pb-6 bg-white shadow-sm shadow-slate-200">
        <View className="flex-row justify-between items-start mb-6">
          <View className="flex-1">
            <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              Mechanic Portal
            </Text>
            <Text className="text-2xl font-black text-slate-900">Hello, Marcus</Text>
            
            {/* NEW: Button to see Mechanic Profile */}
            <TouchableOpacity 
              className="flex-row items-center mt-2"
              activeOpacity={0.7}
              // onPress={() => router.push('/profile')} 
            >
              <Text className="text-blue-600 font-bold text-xs mr-1">View Public Profile</Text>
              <Ionicons name="arrow-forward" size={12} color="#2563eb" />
            </TouchableOpacity>
          </View>

          {/* Avatar also acts as a profile button */}
          <TouchableOpacity className="relative">
            <Image 
              source={{ uri: 'https://img.freepik.com/free-vector/hand-drawn-mechanic-illustrated_23-2148894178.jpg' }} 
              className="w-14 h-14 rounded-2xl border-2 border-slate-100"
            />
            <View className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
          </TouchableOpacity>
        </View>

        {/* 2. Earnings Summary Card */}
        <View className="bg-slate-900 rounded-[32px] p-6 shadow-xl shadow-slate-400">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-slate-400 text-xs font-bold uppercase">Weekly Earnings</Text>
              <Text className="text-white text-3xl font-black mt-1">FCFA 145,000</Text>
            </View>
            <View className="bg-white/10 p-3 rounded-2xl">
              <MaterialCommunityIcons name="wallet-outline" size={28} color="white" />
            </View>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-6 mt-6">
        {/* Quick Action Grid */}
        <View className="flex-row justify-between mb-8">
          <ActionPill icon="calendar-check" label="Schedule" color="#3b82f6" />
          <ActionPill icon="history" label="History" color="#64748b" />
          <ActionPill icon="star" label="Reviews" color="#fbbf24" />
        </View>

        {/* Active Job Section */}
        <Text className="text-slate-900 text-xl font-black mb-4 tracking-tight">Active Service</Text>
        <View className="bg-white p-5 rounded-[28px] border border-blue-100 shadow-sm mb-8">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center">
              <View className="bg-blue-50 p-3 rounded-2xl mr-4">
                <FontAwesome5 name="tools" size={18} color="#3b82f6" />
              </View>
              <View>
                <Text className="text-slate-900 font-bold text-base">Oil Leak Repair</Text>
                <Text className="text-slate-400 text-xs font-medium">Hyundai Santa Fe</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="bg-slate-900 py-4 rounded-2xl items-center">
            <Text className="text-white font-bold">Update Job Status</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-slate-900 text-xl font-black tracking-tight mb-4">New Requests</Text>
        {jobRequests.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Components
const ActionPill = ({ icon, label, color }) => (
  <TouchableOpacity className="items-center w-[30%]">
    <View style={{ backgroundColor: `${color}15` }} className="p-4 rounded-3xl mb-2 w-full items-center">
      <FontAwesome5 name={icon} size={20} color={color} />
    </View>
    <Text className="text-slate-600 text-[11px] font-bold uppercase">{label}</Text>
  </TouchableOpacity>
);

const JobCard = ({ job }) => (
  <TouchableOpacity className="bg-white p-5 rounded-[28px] border border-slate-100 mb-4 shadow-sm flex-row items-center">
    <View className="flex-1">
      <Text className="text-slate-900 font-bold text-base">{job.service}</Text>
      <Text className="text-slate-500 text-xs mt-1">
        <Text className="font-bold">{job.car}</Text>
        <Text> • </Text>
        <Text>{job.distance}</Text>
      </Text>
    </View>
    <View className="bg-slate-50 p-3 rounded-2xl">
      <Ionicons name="chevron-forward" size={20} color="#1e293b" />
    </View>
  </TouchableOpacity>
);