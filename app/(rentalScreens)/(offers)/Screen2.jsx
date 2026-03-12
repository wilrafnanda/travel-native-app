import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
  Modal,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { router } from "expo-router";

const VehicleDetailsScreen = () => {
  const [isAlwaysOpen, setIsAlwaysOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Available");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const statusOptions = ["Available", "Rented", "Sold"];

  const handleCompleteListingPress = () => {
    setShowSuccessModal(true);
    // Animate in
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 12,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto dismiss and navigate
    setTimeout(() => {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 100,
          friction: 12,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSuccessModal(false);
        router.replace("/(rentalScreens)/RentalOffers");
      });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <View className="px-6 py-6 bg-white border-b border-slate-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center mb-3"
        >
          <View className="bg-slate-100 p-2 rounded-full">
            <Ionicons name="arrow-back" size={18} color="#0C2B4E" />
          </View>
          <Text className="ml-3 text-slate-600 font-semibold text-sm">
            Back
          </Text>
        </TouchableOpacity>
        <Text className="text-[#0C2B4E] text-3xl font-black tracking-tight">
          Vehicle Details
        </Text>
        <Text className="text-slate-400 font-medium text-sm mt-1">
          Step 2 of 2 - Complete your listing
        </Text>
      </View>

      <ScrollView
        className="px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140, paddingTop: 24 }}
      >
        {/* Section 1: Vehicle Identification */}
        <View className="mb-8">
          <View className="flex-row items-center mb-5">
            <View className="bg-slate-100 p-2 rounded-full">
              <MaterialCommunityIcons name="car" size={16} color="#0C2B4E" />
            </View>
            <Text className="text-[#0C2B4E] text-base font-black ml-3 tracking-tight">
              Vehicle Information
            </Text>
          </View>

          <View className="space-y-4">
            <View>
              <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                Car Brand
              </Text>
              <TextInput
                placeholder="e.g. BMW"
                placeholderTextColor="#cbd5e1"
                className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 text-[#0C2B4E] font-semibold"
              />
            </View>

            <View>
              <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                Model
              </Text>
              <TextInput
                placeholder="e.g. M4 Competition"
                placeholderTextColor="#cbd5e1"
                className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 text-[#0C2B4E] font-semibold"
              />
            </View>

            <View className="flex-row space-x-3">
              <View className="flex-1">
                <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                  Year
                </Text>
                <TextInput
                  placeholder="2024"
                  keyboardType="numeric"
                  placeholderTextColor="#cbd5e1"
                  className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 text-[#0C2B4E] font-semibold"
                />
              </View>
              <View className="flex-1">
                <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                  Status
                </Text>
                <TouchableOpacity
                  onPress={() => setShowStatusDropdown(true)}
                  className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 flex-row justify-between items-center"
                >
                  <Text className="text-[#0C2B4E] font-semibold">
                    {selectedStatus}
                  </Text>
                  <Ionicons name="chevron-down" size={16} color="#94a3b8" />
                </TouchableOpacity>

                {/* Status Dropdown Modal */}
                <Modal
                  visible={showStatusDropdown}
                  transparent={true}
                  animationType="fade"
                  onRequestClose={() => setShowStatusDropdown(false)}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setShowStatusDropdown(false)}
                    className="flex-1 bg-black/40 justify-center items-center"
                  >
                    <View className="bg-white rounded-[24px] w-80 overflow-hidden shadow-2xl">
                      <View className="px-6 py-4 border-b border-slate-200">
                        <Text className="text-[#0C2B4E] font-black text-lg">
                          Select Status
                        </Text>
                      </View>

                      {statusOptions.map((option, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            setSelectedStatus(option);
                            setShowStatusDropdown(false);
                          }}
                          className={`px-6 py-4 flex-row items-center ${
                            selectedStatus === option
                              ? "bg-blue-50 border-l-4 border-[#0C2B4E]"
                              : "border-b border-slate-100"
                          }`}
                        >
                          {selectedStatus === option && (
                            <Ionicons
                              name="checkmark-circle"
                              size={20}
                              color="#0C2B4E"
                              style={{ marginRight: 12 }}
                            />
                          )}
                          <Text
                            className={`text-base font-semibold ${
                              selectedStatus === option
                                ? "text-[#0C2B4E]"
                                : "text-slate-600"
                            }`}
                          >
                            {option}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>
            </View>

            <View>
              <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                Availability
              </Text>
              <View className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 flex-row items-center justify-between">
                <Text className="text-slate-600 font-semibold text-sm">
                  Always Open
                </Text>
                <Switch
                  value={isAlwaysOpen}
                  onValueChange={setIsAlwaysOpen}
                  trackColor={{ false: "#e2e8f0", true: "#0C2B4E" }}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        {/* Section 2: Financial Details */}
        <View className="mb-8">
          <View className="flex-row items-center mb-5">
            <View className="bg-slate-100 p-2 rounded-full">
              <FontAwesome5 name="money-bill-wave" size={14} color="#0C2B4E" />
            </View>
            <Text className="text-[#0C2B4E] text-base font-black ml-3 tracking-tight">
              Financial Information
            </Text>
          </View>

          <View className="space-y-4">
            <View>
              <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                Purchase Value
              </Text>
              <View className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 flex-row items-center">
                <Text className="text-slate-500 font-bold mr-2 text-base">
                  $
                </Text>
                <TextInput
                  placeholder="85,000"
                  keyboardType="numeric"
                  placeholderTextColor="#cbd5e1"
                  className="flex-1 text-[#0C2B4E] font-semibold"
                />
              </View>
              <Text className="text-slate-400 text-[10px] font-medium mt-2">
                Used for insurance valuation
              </Text>
            </View>

            <View>
              <Text className="text-slate-600 font-bold text-[11px] uppercase letter-spacing mb-3">
                Daily Rental Rate
              </Text>
              <View className="bg-white px-4 py-3.5 rounded-[18px] border border-slate-200 flex-row items-center">
                <Text className="text-slate-500 font-bold mr-2 text-base">
                  $
                </Text>
                <TextInput
                  placeholder="250"
                  keyboardType="numeric"
                  placeholderTextColor="#cbd5e1"
                  className="flex-1 text-[#0C2B4E] font-semibold"
                />
              </View>
              <Text className="text-slate-400 text-[10px] font-medium mt-2">
                Price customers will pay per day
              </Text>
            </View>
          </View>
        </View>

        {/* Info Card */}
        <View className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-[18px] border border-blue-100 mb-4">
          <View className="flex-row">
            <Ionicons
              name="information-circle"
              size={16}
              color="#0C2B4E"
              style={{ marginTop: 2 }}
            />
            <View className="ml-3 flex-1">
              <Text className="text-[#0C2B4E] font-black text-sm">
                Quick Tip
              </Text>
              <Text className="text-slate-600 font-medium text-xs mt-1 leading-tight">
                Competitive pricing increases visibility and earnings. Check
                similar vehicles in your area.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Button */}
      <View className="absolute bottom-6 left-6 right-6">
        <TouchableOpacity
          onPress={handleCompleteListingPress}
          activeOpacity={0.85}
          className="bg-[#0C2B4E] h-16 rounded-[20px] items-center justify-center shadow-2xl flex-row"
        >
          <Ionicons name="checkmark-circle" size={22} color="white" />
          <Text className="text-white font-black text-base ml-3 tracking-wide">
            Complete Listing
          </Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <Animated.View
            style={{
              transform: [{ scale: scaleAnim }],
              opacity: opacityAnim,
            }}
            className="bg-white rounded-[32px] p-8 w-80 items-center shadow-2xl"
          >
            {/* Success Icon with animation */}
            <Animated.View
              style={{
                transform: [{ scale: scaleAnim }],
              }}
              className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-full mb-6"
            >
              <Ionicons name="checkmark" size={48} color="#10b981" />
            </Animated.View>

            {/* Success Message */}
            <Text className="text-[#0C2B4E] text-2xl font-black text-center mb-3">
              Listing Created!
            </Text>
            <Text className="text-slate-500 text-base text-center leading-relaxed">
              Your vehicle has been successfully listed. You can manage it from
              your dashboard.
            </Text>

            {/* Checkmark List */}
            <View className="mt-6 w-full space-y-3">
              <View className="flex-row items-center gap-3">
                <View className="bg-green-100 p-1.5 rounded-full">
                  <Ionicons name="checkmark" size={14} color="#10b981" />
                </View>
                <Text className="text-slate-600 font-semibold flex-1">
                  Basic info verified
                </Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="bg-green-100 p-1.5 rounded-full">
                  <Ionicons name="checkmark" size={14} color="#10b981" />
                </View>
                <Text className="text-slate-600 font-semibold flex-1">
                  Photos uploaded
                </Text>
              </View>
              <View className="flex-row items-center gap-3">
                <View className="bg-green-100 p-1.5 rounded-full">
                  <Ionicons name="checkmark" size={14} color="#10b981" />
                </View>
                <Text className="text-slate-600 font-semibold flex-1">
                  Pricing set
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default VehicleDetailsScreen;
