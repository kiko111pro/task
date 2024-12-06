import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '..//../components/Text';
import BaseView from '../../components/BaseView';
import {Root2} from '../../utils/movies.types';
import FontIcon from 'react-native-vector-icons/FontAwesome6';

export default function Movie({navigation, route}) {
  const item = route.params;
  const movie: Root2 = item.item;

  console.log();
  return (
    <BaseView bgcolor={'#000'}>
      <ScrollView style={{flex: 1}}>
        <View style={{position: 'relative'}}>
          <FastImage
            source={{uri: movie.show.image?.original}}
            style={{height: 300}}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              width: 44,
              top: 15,
              left: 15,
              backgroundColor: 'rgba(0,0,0,.3)',
              padding: 10,
              borderRadius: 8,
            }}>
            <FontIcon name="arrow-left" size={24} color={'#fff'} />
          </Pressable>
        </View>
        <View style={{margin: 16}}>
          <Text style={styles.titleText}>{movie.show.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <FontIcon name="stopwatch" size={18} color={'#888'} />
            <Text style={{color: '#888', marginTop: 8}}>152 minutes</Text>
          </View>

          <View style={{gap: 6, marginTop: 20}}>
            <Text style={{fontWeight: '700'}}>Movie Description</Text>
            <Text style={{fontSize: 14, color: '#999'}}>
              {movie.show.summary}
            </Text>
          </View>
        </View>
      </ScrollView>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
  },
});
