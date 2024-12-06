import {ImageBackground, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Text from '../../components/Text';
import {useNavigation} from '@react-navigation/native';

export default function Banner() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{height: 400}}
      source={require('../../../assets/images/banner.png')}>
      <Pressable
        onPress={() => navigation.navigate('search')}
        style={{
          backgroundColor: '#c4c4c4',
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 100,
          alignSelf: 'flex-end',
          marginTop: 24,
          marginRight: 24,
        }}>
        <Feather name="search" size={24} color={'#000'} />
        <Text style={{color: '#000'}}>Search</Text>
      </Pressable>
      <LinearGradient
        colors={['#00000000', '#000000']}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            width: 260,
            position: 'absolute',
            bottom: 50,
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Feather name="plus" size={24} color={'#fff'} />
            <Text style={{color: '#fff'}}>My List</Text>
          </View>
          <View
            style={{
              // width: 100,
              gap: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#c4c4c4',
              borderRadius: 5,
              paddingHorizontal: 10,
            }}>
            <FontAwesome name="play" color={'#000'} size={24} />
            <Text style={{color: '#000'}}>Play</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Feather name="info" size={24} color={'#fff'} />
            <Text>Info</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
