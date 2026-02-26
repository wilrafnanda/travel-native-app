import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../component/InputField";

import { toast } from "../../lib/toast";

const Log_in = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!Form.email || !Form.password) {
      Alert.alert("INVALID", "Please enter valid email address & password.");
      return;
    }
    setIsSubmitting(true);

    try {
      
      toast("Welcome back. You are logged in");
      setTimeout(() => {
        setIsSubmitting(false);
        router.replace("/(Tabs)/Home");
      }, 2000);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
      router.replace("/(Tabs)/Home");
    }
  };

  return (
    <SafeAreaView className="bg-background-light">
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%" }}>
        <KeyboardAwareScrollView className="h-full w-full flex  mt-[100px] py-4 px-4 "
          containerStyle={{flexGrow:1 }}
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
              title="Sign in"
              containerStyle={`bg-secondary w-full rounded-lg mt-8 bg-secondary`}
              isLoading={isSubmitting}
              onPress={submit}
            />
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
