
import { Slot, Tabs } from 'expo-router'
import React from 'react'
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from 'react-native';

export default function TabsLayout() {
    return (
      
      <Tabs screenOptions={{
        // This hides the header for ALL screens in this tab group
        headerShown: false,
        tabBarStyle: {
        backgroundColor: '#ffffff',
       height:80,
       paddingTop:15,
       marginTop:-16
        
        
    },
      }}>
       
        
      <Tabs.Screen
        name="Home" // Matches index.tsx
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome6 size={22} name="house" color={!focused ?"#94a3b8" :"#0C2B4E"}  />,
        }}
      />
      <Tabs.Screen
        name="Rental" // Matches index.tsx
        options={{
          title: 'Rental',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome6 size={22} name="car" color={!focused ?"#94a3b8" :"#0C2B4E"}  />,
        }}
      />
      <Tabs.Screen
        name="Driver" // Matches index.tsx
        options={{
          title: 'Driver',
          tabBarShowLabel: false,
          tabBarIcon: ({ color ,focused}) => <FontAwesome6 size={22} name="user-tag" color={!focused ?"#94a3b8" :"#0C2B4E"}  />,
        }}
      />
      <Tabs.Screen
        name="Sale" // Matches index.tsx
        options={{
          title: 'Sale',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => <FontAwesome6 size={22} name="hand-holding-dollar" color={!focused ?"#94a3b8" :"#0C2B4E"}  />,
        }}
      />
      </Tabs>
    )
}