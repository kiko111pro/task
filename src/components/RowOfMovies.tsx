import React, {Fragment, useEffect, useState} from 'react';
import {getMovies} from '../features/movies.service';
import {Root as ListOfMovies} from './../utils/movies.types';
import FastImage from 'react-native-fast-image';
import {ScrollView, Text, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {navigationProps} from '../utils/navigation.types';
import FlashView from './FlashView';

interface ComponentProps {
  title: string;
}

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 10,
  },

  card: {
    width: 103,
    height: 161,
    marginRight: 10,
    borderRadius: 4,
  },
});

export default function RowOfMovies(props: ComponentProps) {
  const navigation = useNavigation<navigationProps>();
  const [movies, setMovies] = useState<ListOfMovies>();
  const [loading, setLoading] = useState<boolean>(false);

  const getListOfMovies = async () => {
    setLoading(true);
    const res: ListOfMovies = await getMovies();
    if (res) setMovies(res);
    setLoading(false);
  };

  useEffect(() => {
    getListOfMovies();
  }, []);

  return (
    <View style={styles.rowContainer}>
      <Text style={{fontWeight: '700', fontSize: 18, color: '#fff'}}>
        {props.title}
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{flexDirection: 'row', gap: 8, marginTop: 8}}>
        {loading
          ? [...Array(5)].map((_, id) => (
              <FlashView key={id} style={styles.card}>
                <View />
              </FlashView>
            ))
          : movies?.map((item, idx) => (
              <Pressable
                key={idx}
                onPress={() => navigation.navigate('movie', {item})}>
                <FastImage
                  key={idx}
                  source={{uri: item.show.image?.original}}
                  style={styles.card}
                />
              </Pressable>
            ))}
      </ScrollView>
    </View>
  );
}
