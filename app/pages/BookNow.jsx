import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const PlanRideScreen = () => {
  const insets = useSafeAreaInsets();
  const [destination, setDestination] = useState('');

  // Initial Region focused on a city center
  const initialRegion = {
    latitude: 4.0511, // Douala Latitude
  longitude: 9.7679, // Douala Longitude
  latitudeDelta: 0.05, // Zoom level (approx 5km view)
  longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      {/* 1. MAP ENGINE */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true} // Shows the blue dot for your current spot
        followsUserLocation={true} // Keeps the camera following you
      >
        <Marker coordinate={{ latitude: 40.7128, longitude: -74.0060 }}>
           <View className="bg-secondary p-2 rounded-full border-2 border-white shadow-md">
             <Ionicons name="car" size={18} color="white" />
           </View>
        </Marker>
      </MapView>

      {/* 2. TOP INTERFACE BUTTONS */}
      <View style={{ top: insets.top + 10 }} className="absolute left-5 right-5 flex-row justify-between">
        <TouchableOpacity className="bg-white p-3 rounded-full shadow-lg" onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-3 rounded-full shadow-lg">
          <MaterialCommunityIcons name="crosshairs-gps" size={24} color="#0C2B4E" />
        </TouchableOpacity>
      </View>

      {/* 3. BOTTOM SELECTION SHEET */}
      <KeyboardAwareScrollView className="absolute bottom-0 w-full bg-white rounded-t-[40px] px-6 pt-2 pb-10 shadow-2xl" enableOnAndroid={true} extraScrollHeight={0}>

        {/* Visual Handle */}
        <View className="w-12 h-1.5 bg-slate-200 rounded-full self-center mb-6" />
        
        <Text className="text-2xl font-extrabold text-secondary mb-6">Plan your ride</Text>

        {/* Input Container */}
        <View className="bg-slate-50 rounded-3xl p-4 border border-slate-100">
          {/* Origin */}
          <View className="flex-row items-center mb-4">
            <View className="w-5 h-5 rounded-full border-4 border-secondary items-center justify-center">
              <View className="w-2 h-2 bg-secondary rounded-full" />
            </View>
            <Text className="ml-4 text-secondary font-bold text-base">Current Location</Text>
          </View>

          {/* Destination Input */}
          <View className="flex-row items-center bg-white rounded-2xl border border-secondary px-4 py-3">
            <Ionicons name="location" size={20} color="#0C2B4E" />
            <TextInput
              placeholder="Where to?"
              placeholderTextColor="#94a3b8"
              className="flex-1 ml-3 text-secondary font-medium"
              value={destination}
              onChangeText={setDestination}
            />
            <Ionicons name="add" size={24} color="#94a3b8" />
          </View>
        </View>

        {/* Schedule Toggles */}
        <View className="flex-row mt-6 gap-x-4">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-secondary py-4 rounded-2xl">
            <Ionicons name="time" size={20} color="white" />
            <Text className="text-white font-bold ml-2">Leave Now</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-slate-100 py-4 rounded-2xl">
            <Ionicons name="calendar" size={20} color="#64748b" />
            <Text className="text-slate-500 font-bold ml-2">Schedule</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Places Grid */}
        <Text className="text-slate-400 font-bold text-[10px] mt-8 mb-4 uppercase tracking-widest">Recent</Text>
        <View className="flex-row justify-between mb-8">
          <RecentItem icon="home" label="Home" />
          <RecentItem icon="briefcase" label="Work" />
          <RecentItem icon="fitness" label="Gym" />
          <RecentItem icon="cart" label="Market" />
        </View>

        {/* Action Button */}
        <TouchableOpacity className="bg-secondary flex-row items-center justify-center py-5 rounded-[25px] shadow-xl mt-10">
          <Text className="text-white font-black text-lg mr-2">Find Rides</Text>
          <FontAwesome5 name="arrow-right" size={16} color="white" />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const RecentItem = ({ icon, label }) => (
  <View className="items-center">
    <TouchableOpacity className="bg-slate-50 w-14 h-14 rounded-full items-center justify-center mb-2 border border-slate-100">
      <Ionicons name={icon} size={24} color="#334155" />
    </TouchableOpacity>
    <Text className="text-slate-500 text-xs font-bold">{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: width, height: height * 0.6 },
});

export default PlanRideScreen;