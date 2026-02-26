import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Components
import RentalHeader from '../../component/RentalHeader';
import CustomCarCard from '../../component/CustomCarCard';
import { router } from 'expo-router';

export default function Rentals() {
  const categories = [
    "All", "Economy", "Luxury", "SUV", "Sedan", "Truck", "Electric", "Compact", "Van"
  ];



  // Logic: Purely state-based tab switching
  const [category, setCategory] = useState(categories[0]);

  // Mock array to represent your car data
  const carData = [1,2]; 

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 1. Header Area */}
      <View className="px-6 pt-2 pb-4 bg-white shadow-sm shadow-slate-200">
        <RentalHeader />
      </View>

      <View className="flex-1">
        {/* 2. Title & Stats Section */}
        <View className="mt-6 px-6">
          <View className="flex-row justify-between items-center mb-5">
            <View>
              <Text className="text-slate-900 text-2xl font-black tracking-tight">
                Available Near You
              </Text>
              <Text className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-1">
                <Text>Found </Text>
                <Text>{carData.length}</Text>
                <Text> vehicles in Douala</Text>
              </Text>
            </View>
            <TouchableOpacity className="bg-slate-100 p-2.5 rounded-xl">
              <Ionicons name="options-outline" size={20} color="#1e293b" />
            </TouchableOpacity>
          </View>

          {/* 3. Category Tab Selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-6 -mx-6 pl-6"
          >
              {categories.map((item, index) => (

              <TouchableOpacity
              // FIX: Wrap in an arrow function
                onPress={() =>{ setCategory(item);}}
                key={index}
                underlayColor="#E2E2E2" // Good practice for TouchableHighlight
                className={`px-6 py-3 rounded-[100px] mr-2 mt-4 mb-4 ${
                  item === category ? 'bg-text-brand' : 'bg-gray-200'
                }`}
              >
                <Text className={`font-bold ${
                  item === category ? 'text-white' : 'text-gray-600'
                }`}>
                  {item}
                </Text>
              </TouchableOpacity>
          ))}
           
          </ScrollView>
        </View>

        {/* 4. Car List Section */}
        <FlatList
          data={carData}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}
          renderItem={() => (
            <View className="mb-6">
              <CustomCarCard

                 onPress={() => router.push('/pages/Cardetail')}

            />
            </View>
          )}
          // Empty state handling with proper Text wrapping
          ListEmptyComponent={() => (
            <View className="items-center mt-20 px-10">
              <Ionicons name="search-outline" size={48} color="#cbd5e1" />
              <Text className="text-slate-400 mt-4 font-medium text-center">
                <Text>No cars available in the </Text>
                <Text className="text-slate-600 font-bold">{category}</Text>
                <Text> category at this time.</Text>
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}