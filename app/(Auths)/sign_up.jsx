import React, { useState } from "react";
import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router ,useRouter} from "expo-router";


// import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { toast } from "../../lib/toast";
import { useAuth } from "@/contexts/AuthContext";



import InputField from "../../component/InputField";






const sign_up = () => {

const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Get the function from your Context
  const { onRegister } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    // Basic validation
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);
    
    // Call the function from your AuthContext
    const result = await onRegister(username, email, password);

    setLoading(false);

    // Log the full response
    console.log("Registration Response:", JSON.stringify(result, null, 2));

    if (result && result.success) {
      // Registration successful
      console.log("User Data:", result.data.user);
      console.log("Token:", result.data.token);
      
      Alert.alert("Registration Successful", result.message);
      // Send them to login
      router.replace("/(Auths)/log_in");
    } else {
      // Show error message from backend
      Alert.alert("Registration Failed", result?.message || "Something went wrong");
      console.log("Registration Error:", result);
    }
  };

  return (
    <SafeAreaView className="bg-background-light flex-1">
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%" }}>
        <View
          description="Track the status and time remaining on your active rentals"
          className="h-full w-full flex items-start mt-[100px] py-4 px-4 relative"
        >
          <View className="w-20 h-20  rounded-2xl flex items-center justify-center bg-secondary transform rotate-6 ">
            <FontAwesome6 name="user-plus" size={24} color="#ffffff" />
          </View>
          <KeyboardAwareScrollView
            className="flex-1 w-full"
            containerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={100}
          >
            <Text className="text-text-dark text-[3rem] font-extrabold ">
              Create Account
            </Text>
            <Text className="text-text-muted text-lg font-extrabold ">
              Join us to start your journey
            </Text>
           
                <>
                  <InputField
                    title="User Name"
                    type="email"
                    value={username}
                    onChangeText={setUsername}
                    keyboardType=" email-address"
                    placeholder="Enter a correct email address"
                    containerStyle=""
                  />
                 
                 
                  <InputField
                    title="User Email"
                    type="email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType=" email-address"
                    placeholder="Enter a correct email address"
                    containerStyle=""
                  />
                 
                 
                  <InputField
                    title="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter a strong password"
                    containerStyle=""
                  />


                  {loading ? (
                          <ActivityIndicator size="large" color="#0000ff" />
                              ) : (
                           <CustomButton
                              title="Sign Up"
                              containerStyle={`bg-secondary w-full rounded-lg mt-8 bg-secondary`}
                              onPress={handleRegister}
                            />
                       )}
                  
                  
                  
                </>
              
          
            <Text
              className="text-text-muted text-center mt-4"
              onPress={() => router.replace("/(Auths)/log_in")}
            >
              Already have an account?{" "}
              <Text className="text-primary font-semibold">Sign In</Text>
            </Text>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_up;
