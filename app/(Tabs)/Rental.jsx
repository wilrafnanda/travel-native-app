
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import CustomHeader from '../../component/CustomHeader';
import CustomCard from '../../component/CustomCard';
import CustomRentalCard from '../../component/CustomRentalCard';

export default function Rental() {
  return (
    <SafeAreaView style={{paddingLeft:10, paddingRight:10, paddingTop:30 , height:"100%"}}>
        <CustomHeader/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full">
            <Text className="text-4xl font-bold text-secondary mb-[30px] ">
              Rental Hub
            </Text>
        </View>
        <CustomCard
          title ="Avoilable Vehicles for Rent"
          buttonTitle = "Browse Rentals"
          description ="Explore our wide range of premium vehicles avoilable for immediate booking nearby"
          tag="Looking to rent?"
          icon="truck-moving"
        />
        <CustomRentalCard
          title='Your Rental Offers'
          description='Manage the vejicles you are currently renting out to other'
          onPress={()=>{}}
          buttonTitle="View My Offers"
          icon='key'
          iconColor="0C2B4E"
        />
        <CustomRentalCard
          title='Ongoing rentals'
          description='Track the status and time remaining on your active rentals'
          onPress={()=>{}}
          buttonTitle="Track rentals"
          icon='user-clock'
          iconColor="0C2B4E"
        />
      </ScrollView>
    </SafeAreaView>
  )
}