import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router, useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../component/InputField";

import { useAuth } from "@/contexts/AuthContext";



const Log_in = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const {onLogin, authState} = useAuth()
    const router = useRouter()


    const handleLogin = async() => {
     
        if(!password || !email){
          Alert.alert("All fields are required")
          return;
        }
        setLoading(true)
        const respond = await onLogin(email, password);
        setLoading(false)
        
        // Log the full response
        console.log("Login Response:", JSON.stringify(respond, null, 2));
        
        if (respond && respond.success) {
          // Login successful
          console.log("User Data:", respond.data.user);
          console.log("Token:", respond.data.token);
          
          Alert.alert("Login Successful", respond.message);
          
          // Send user to home or next screen
          router.replace("/(Tabs)/Home");
        } else {
          // Show error message from backend
          Alert.alert("Login Failed", respond?.message || "Something went wrong");
          console.log("Login Error:", respond);
        }
    }

  return (
    <SafeAreaView className="bg-background-light">
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%" }}>
        <KeyboardAwareScrollView
          className="h-full w-full flex  mt-[100px] py-4 px-4 "
          containerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraScrollHeight={100}
        >
          <View className="w-20 h-20  rounded-2xl flex items-center justify-center bg-secondary transform rotate-6 ">
            <FontAwesome6 name="right-to-bracket" size={24} color="#ffffff" />
          </View>
          <View className="mt-4 w-full">
            <Text className="text-text-dark text-[3rem] font-extrabold ">
              Welcome back
            </Text>
            <Text className="text-text-muted text-lg font-extrabold ">
              Enter your details to sign in
            </Text>

            <>
             
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
                              onPress={handleLogin}
                            />
                       )}
                  
                  
                  
                </>
            <Text
              className="text-text-muted text-center mt-4"
              onPress={() => router.replace("/(Auths)/sign_up")}
            >
              Create a new account?{" "}
              <Text className="text-primary font-semibold">Sign up</Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Log_in;
