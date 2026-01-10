import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import QuickAccess from '../../component/QuickAccess';
import CustomHeader from "../../component/CustomHeader";
import CustomCard from "../../component/CustomCard";



export default function Home() {
  return (
   <SafeAreaProvider>
    <SafeAreaView style={{paddingLeft:10, paddingRight:10, paddingTop:30}}>
      <CustomHeader/>

      <ScrollView showsVerticalScrollIndicator={false}>
      
      <View className="w-full">
          <Text className="text-text-brand text-2xl font-bold mb-2 opacity-80">GOOD MORNING,</Text>
          <Text className="text-4xl font-bold text-secondary ">WELCOME,</Text>
          <Text className="text-4xl font-bold text-secondary mb-[30px] ">
            ALEX MORGAN,
          </Text>
      </View>
      <CustomCard
        title ="Book Transportation"
        buttonTitle = "Book now"
        description ="Need to go somewhere? Find the perfect ride for your journey now"
        tag="Book Ride"
        icon="car"
      />
      <View>
        <Text className="font-bold text-2xl text-secondary mt-3">Quick Access</Text>
         <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className=""
            >
        <View className="w-full flex flex-row items-center justify-between gap-4 mt-5">
            <QuickAccess
              title='favourite'
              icon='heart'
            />
            <QuickAccess
              title='Saved'
              icon='bookmark'
            />
            <QuickAccess
              title='History'
              icon='clock-rotate-left'
            />
           
        </View>
        </ScrollView>
      </View>
      
      </ScrollView>
    </SafeAreaView>
   </SafeAreaProvider>
  )
}