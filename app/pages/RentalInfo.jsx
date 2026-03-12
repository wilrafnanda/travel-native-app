import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const RentalInfoScreen = () => {
  const [idPhoto, setIdPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) setIdPhoto(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('back')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0C2B4E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rental Information</Text>
        <View style={{ width: 40 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Car Summary Card */}
        <View style={styles.card}>
          <View style={styles.carImagePlaceholder}>
             <Ionicons name="car-outline" size={60} color="#cbd5e1" />
          </View>
          <View style={styles.carDetails}>
            <View>
              <Text style={styles.carName}>Tesla Model 3</Text>
              <Text style={styles.carSub}>Electric • Automatic • 5 Seats</Text>
            </View>
            <View style={{ alignItems: 'end' }}>
              <Text style={styles.price}>$85</Text>
              <Text style={styles.unit}>/ day</Text>
            </View>
          </View>
        </View>

        {/* Rental Period Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <Ionicons name="calendar-outline" size={22} color="#0C2B4E" />
            <Text style={styles.sectionTitle}>Rental Period</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>START DATE</Text>
              <View style={styles.dateInput}>
                <Text style={styles.dateText}>10/24/2023, 10:00</Text>
                <Ionicons name="calendar" size={16} color="#94a3b8" />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>END DATE</Text>
              <View style={styles.dateInput}>
                <Text style={styles.dateText}>10/27/2023, 10:00</Text>
                <Ionicons name="calendar" size={16} color="#94a3b8" />
              </View>
            </View>
          </View>
        </View>

        {/* Driver Information Section */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="card-account-details-outline" size={22} color="#0C2B4E" />
            <Text style={styles.sectionTitle}>Driver Information</Text>
          </View>
          
          <Text style={styles.label}>FULL NAME</Text>
          <View style={styles.textInputContainer}>
            <Ionicons name="person" size={18} color="#94a3b8" />
            <TextInput style={styles.textInput} placeholder="John Doe" />
          </View>

          <Text style={styles.label}>PHONE NUMBER</Text>
          <View style={styles.textInputContainer}>
            <Ionicons name="call" size={18} color="#94a3b8" />
            <TextInput style={styles.textInput} placeholder="+1 (555) 000-0000" keyboardType="phone-pad" />
          </View>

          <Text style={styles.label}>DRIVER'S LICENSE / ID</Text>
          <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
            {idPhoto ? (
              <Image source={{ uri: idPhoto }} style={styles.uploadedImage} />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <View style={styles.cameraIconCircle}>
                  <Ionicons name="camera" size={24} color="#0C2B4E" />
                </View>
                <Text style={styles.uploadText}>Upload Photo ID</Text>
                <Text style={styles.uploadSub}>Front side - JPG, PNG or PDF</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  headerTitle: { fontSize: 20, fontWeight: '900', color: '#0C2B4E' },
  backButton: { backgroundColor: 'white', padding: 10, borderRadius: 100, elevation: 2, shadowOpacity: 0.1 },
  card: { backgroundColor: 'white', marginHorizontal: 20, marginBottom: 15, borderRadius: 25, padding: 20, elevation: 2, shadowOpacity: 0.05 },
  carImagePlaceholder: { backgroundColor: '#F1F5F9', height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  carDetails: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  carName: { fontSize: 22, fontWeight: '900', color: '#0C2B4E' },
  carSub: { color: '#94a3b8', fontSize: 13, marginTop: 4 },
  price: { fontSize: 22, fontWeight: '900', color: '#0C2B4E' },
  unit: { color: '#94a3b8', fontSize: 12, textAlign: 'right' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#0C2B4E', marginLeft: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  inputGroup: { width: '48%' },
  label: { fontSize: 11, fontWeight: '800', color: '#94a3b8', marginBottom: 8, marginTop: 15 },
  dateInput: { backgroundColor: '#F8FAFC', padding: 12, borderRadius: 15, borderWidth: 1, borderColor: '#E2E8F0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateText: { fontSize: 12, color: '#475569', fontWeight: '600' },
  textInputContainer: { backgroundColor: '#F8FAFC', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderRadius: 15, borderWidth: 1, borderColor: '#E2E8F0', height: 55 },
  textInput: { flex: 1, marginLeft: 10, color: '#0C2B4E', fontWeight: '600' },
  uploadArea: { borderStyle: 'dashed', borderWidth: 2, borderColor: '#E2E8F0', borderRadius: 20, height: 180, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  cameraIconCircle: { backgroundColor: 'white', padding: 12, borderRadius: 100, elevation: 3, marginBottom: 10 },
  uploadText: { fontWeight: '800', color: '#0C2B4E' },
  uploadSub: { fontSize: 10, color: '#94a3b8', marginTop: 5 },
  footer: { position: 'absolute', bottom: 0, width: '100%', padding: 20, backgroundColor: 'transparent' },
  paymentButton: { backgroundColor: '#0C2B4E', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20 },
  paymentButtonText: { color: 'white', fontWeight: '900', fontSize: 16, marginRight: 10 }
});

export default RentalInfoScreen;