
import React from 'react'
import { Stack } from 'expo-router'

export default function RentalLayout() {
  return (
    <Stack
      screenOptions={{
        // This removes the header for every screen in this group
        headerShown: false,
        // Optional: Ensure the background matches your theme
        contentStyle: { backgroundColor: '#fff' } 
      }}
    />
  );
}