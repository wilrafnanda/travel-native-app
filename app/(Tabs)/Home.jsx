import FontAwesome5 from "@expo/vector-icons/FontAwesome6";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import QuickAccess from '../../component/QuickAccess';
import CustomHeader from "../../component/CustomHeader";
import CustomCard from "../../component/CustomCard";
import { router } from "expo-router";



export default function Home() {
  return (
   <SafeAreaProvider className="flex-1 bg-white">
  {/* Use flex-1 to ensure the background fills the screen */}
  <SafeAreaView className="flex-1 px-4">
    <CustomHeader />

    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
      {/* 1. Refined Greeting Section */}
      <View className="py-3">
        <Text className="text-brand font-semibold tracking-widest text-xs uppercase opacity-60">
          Good Morning
        </Text>
        <Text className="text-3xl font-extrabold text-slate-900 leading-tight">
          Welcome back,
        </Text>
        <Text className="text-3xl font-light text-slate-500">
          Alex Morgan
        </Text>
      </View>

      {/* 3. Main Action Card */}
      <View className="mb-8 py-3">
        <CustomCard
          title="Book Transportation"
          buttonTitle="Book now"
          description="Find the perfect ride for your journey now"
          tag="Promotion"
          icon="car"
          onPress={()=> router.push("/pages/BookNow")}
        />
      </View>

      {/* 4. Quick Access Section */}
      <View className="mb-10">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-bold text-xl text-slate-800">Quick Access</Text>
          <TouchableOpacity>
            <Text className="text-brand font-bold text-xs uppercase">View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          <View className="flex-row gap-4">
            <QuickAccess title='Favorite' icon='heart' />
            <QuickAccess title='Saved' icon='bookmark' />
            <QuickAccess title='History' icon='clock-rotate-left' />
            <QuickAccess title='Support' icon='headset' />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  </SafeAreaView>
</SafeAreaProvider>
  )
}