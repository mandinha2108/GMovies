import { View, Text, Dimensions, TouchableNativeFeedback, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

var { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
   const navigation = useNavigation();
   const handleClick = (item) => {
    navigation.navigate('Movie', item);
   }
  return (
    <View className="mb-8">
      <Text className="text-white text-x1 mv-4">Em alta</Text>
      <Carousel 

      />
    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require('')}
        style={{width: '100%', height:'100%'}}
        className="rounded-2x1"
      />
    </TouchableWithoutFeedback>
    )
}