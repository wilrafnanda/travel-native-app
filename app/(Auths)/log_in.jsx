import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../component/InputField";
import CustomButton from "@/component/CustomButton";
import { router } from "expo-router";

const Log_up = () => {
  const [Form, setForm] = useState({
   
    email: "",
    password: "",
  });

  const[isSubmiting, setIsSubmiting] = useState(false);
  const submit = () => {}
  return (
    <SafeAreaView className="bg-background-light">
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%" }}>
        <View className="h-full w-full flex items-start mt-[100px] py-4 px-4 ">
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


             <InputField
            title="User Email"
            value={Form.email}
            onChangeText={(e) => {
              setForm({ ...Form, email: e });
            }}
            placeholder="Enter a correct email address"
            containerStyle=""
            
          />
             <InputField
            title="Password"
            value={Form.password}
            onChangeText={(e) => {
              setForm({ ...Form, password: e });
            }}
            placeholder="Enter a strong password"
            containerStyle=""
            
          />
          <CustomButton
            title='Sign in'
            containerStyle={`bg-secondary w-full rounded-lg mt-8 `}
            isLoading={isSubmiting}
            handlePress={submit} 
          />
          <Text
            className="text-text-muted text-center mt-4"
            onPress={() => router.replace("/(Auths)/sign_up")}
          >
            Create a new account?{" "}
            <Text className="text-primary font-semibold">Sign up</Text>
          </Text>
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Log_up;
