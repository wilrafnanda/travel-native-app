import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import UseProvider from "@/contexts/UserContext";

import "./global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <UseProvider>
        <AuthGate />
      </UseProvider>
    </AuthProvider>
  );
}

// Separate component so we can use the auth context
function AuthGate() {
  const { authState } = useAuth();

  return (
    <Stack>
      {/* Public routes (only when NOT authenticated) */}
      <Stack.Protected guard={!authState.authenticated}>
        <Stack.Screen name="(Auths)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack.Protected>

      {/* Private routes (only when authenticated) */}
      <Stack.Protected guard={authState.authenticated}>
        <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="pages" options={{ headerShown: false }} />
        <Stack.Screen name="(rentalScreens)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
