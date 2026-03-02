import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";

import "./global.css";




export default function RootLayout() {
  return (
    
<AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="(Auths)"
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="(Tabs)"
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="pages"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
        name="(rentalScreens)" 
        options={{ headerShown: false }} 
      />
      </Stack>
</AuthProvider>
   
  );
}
