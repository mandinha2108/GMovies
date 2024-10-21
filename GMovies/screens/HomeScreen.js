import React from 'react'
import { View, 
  Text,
  Platform,
  TouchableOpacity, 
  ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon} from "react-native-heroicons/outline"
import { styles } from '../theme'
import TrendingMovies from '../components/trendingMovies'

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [trending, setTrending] = usestate([1,2,3]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className ={ios ? "-mb-2" : "mb-3"}>
        <Statusbar style='light' />
        <View className="flex-row justify-between items-center mx-4 mt-2">
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white"/>
          </TouchableOpacity>
          <Text className="text-white text-3x1 font-bold">
              <Text style={styles.text}>GM</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View> 
      </SafeAreaView>

      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10}}
        >
          <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  )
}