import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../component/InputField";
import { Formik } from "formik";



const Log_in = () => {
 

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

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values, { setSubmitting }) => {
               
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Password is required";
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
                    title="User Email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    keyboardType="email-address"
                    placeholder="Enter a correct email address"
                    containerStyle=""
                  />
                  {errors.email && touched.email && (
                    <Text className="text-red-600 text-sm mt-1">
                      {errors.email}
                    </Text>
                  )}

                  <InputField
                    title="Password"
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholder="Enter your password"
                    containerStyle=""
                  />
                  {errors.password && touched.password && (
                    <Text className="text-red-600 text-sm mt-1">
                      {errors.password}
                    </Text>
                  )}

                  <CustomButton
                    title="Sign In"
                    containerStyle="bg-secondary w-full rounded-lg mt-8"
                    isLoading={isSubmitting}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                  />
                  {isSubmitting && (
                   
                      <ActivityIndicator size={50} color="#ffffff" />
                   
                  )}
                </>
              )}
            </Formik>
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
