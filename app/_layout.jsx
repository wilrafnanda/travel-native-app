import { Stack } from "expo-router";

import "./global.css";

export default function RootLayout() {
  return (
    
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
      </Stack>
    
  );
}
