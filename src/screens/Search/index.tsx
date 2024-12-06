import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Root} from '../../utils/movies.types';
import FastImage from 'react-native-fast-image';
import {searchMovieQuery} from '../../features/movies.service';
import Text from '../../components/Text';

export default function Search({navigation}) {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState<Root | null>();

  const fetchResult = async () => {
    const resp = await searchMovieQuery(input);
    console.log(resp);
    setSearchData(resp);
  };

  useEffect(() => {
    if (input.length > 1) setTimeout(fetchResult, 2000);
  }, [input]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <View style={styles.search}>
            <View style={styles.searchIcon}>
              <FeatherIcon color="#848484" name="search" size={17} />
            </View>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={setInput}
              placeholder="Start typing.."
              placeholderTextColor="#848484"
              returnKeyType="done"
              style={styles.searchControl}
              value={input}
            />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.searchContent}>
          {searchData ? (
            searchData?.map((item, id) => (
              <Pressable
                onPress={() => navigation.navigate('movie', {item})}
                key={id}
                style={{
                  height: 76,
                  flexDirection: 'row',
                  backgroundColor: '#424242',
                  marginBottom: 4,
                  alignItems: 'center',
                  gap: 10,
                }}>
                <FastImage
                  style={{height: '100%', width: 145}}
                  resizeMode="cover"
                  source={{uri: item.show.image?.medium}}
                />
                <Text>{item.show.name}</Text>
              </Pressable>
            ))
          ) : (
            <Text style={styles.searchEmpty}>No results</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Search */
  search: {
    position: 'relative',
    backgroundColor: '#efefef',
    // borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchWrapper: {
    paddingTop: 8,
    // paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    // backgroundColor: 'red',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  searchControl: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    paddingLeft: 34,
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#424242',
  },
  searchContent: {
    // paddingLeft: 24,
  },
  searchEmpty: {
    textAlign: 'center',
    paddingTop: 16,
    fontWeight: '500',
    fontSize: 15,
    color: '#9ca1ac',
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
