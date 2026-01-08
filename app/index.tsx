// import { Link, useRouter } from "expo-router";
import CustomButton from "@/component/CustomButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%", width: "100%" }}>
        <View className="flex w-full items-end justify-end p-6 ">
          <TouchableOpacity >
            <Text className="font-bold text-2xl">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 flex flex-col items-center  px-8 relative z-10 w-full">
          <View className="w-32 h-32 bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 ring-1 ring-white/50 flex items-center justify-center transform hover:scale-105 mt-[100px]">
            <FontAwesome6 name="car" size={60} color="#135bec" />
          </View>

          <View className="mt-10 ">
            <Text className="text-5xl text-text-dark text-center mb-6">
              Welcome To
              <Text className="text-primary">TransitFlow</Text>
            </Text>
            <Text className="text-text-muted text-2xl font-normal leading-relaxed max-w-[32ch] text-center">
              Your journey to the future starts here. Experience seamless,
              autonomous urban travel designed for your lifestyle.
            </Text>
          </View>

          
            <CustomButton
              title="Get Started"
              onPress={() => router.navigate('/sign_up')}
              containerStyle=" w-full mt-40"
            />
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
