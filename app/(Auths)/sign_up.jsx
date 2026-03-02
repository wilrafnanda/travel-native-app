import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Formik } from "formik";

// import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { toast } from "../../lib/toast";
import { useAuth } from "@/contexts/AuthContext";


import InputField from "../../component/InputField";






const sign_up = () => {

  const {onRegister} = useAuth()

  

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
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={(values)=>{
                 try {
                    const result = onRegister(username, email , password)
                    if(result){
                      console.log(result);
                      
                    }
                  } catch (error) {
                    Alert.alert("Error", error.message);console.log(error);
                    
                  } finally {

                  }
              }
                
              }
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "email Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if(!values.password){
                  errors.password = "password is required"
                }
                if(!values.username){
                  errors.username = "user name required"
                }

                return errors;
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                
              }) => (
                <>
                  <InputField
                    title="User Name"
                    type="email"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    keyboardType=" email-address"
                    placeholder="Enter a correct email address"
                    containerStyle=""
                  />
                  {errors.username && touched.username && (
                    <Text className="text-red-700">{errors.username}</Text>
                  )}
                 
                  <InputField
                    title="User Email"
                    type="email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType=" email-address"
                    placeholder="Enter a correct email address"
                    containerStyle=""
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-700">{errors.email}</Text>
                  )}
                 
                  <InputField
                    title="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("Password")}
                    placeholder="Enter a strong password"
                    containerStyle=""
                  />
                   {errors.password && touched.password &&( <Text className="text-red-700">{errors.password}</Text>)}

                  <CustomButton
                    title="Sign Up"
                    containerStyle={`bg-secondary w-full rounded-lg mt-8 bg-secondary`}
                    isLoading={isSubmitting}
                    onPress={handleSubmit}
                  />
                  {isSubmitting && (
                    <View className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                      <ActivityIndicator size={50} color={"red"} />
                    </View>
                  )}
                </>
              )}
            </Formik>
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
