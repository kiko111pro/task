import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BaseView from '../../components/BaseView';
import Banner from './Banner';
import {getMovies} from '../../features/movies.service';
import {Root as ListOfMovies} from '../../utils/movies.types';
import FastImage from 'react-native-fast-image';
import RowOfMovies from '../../components/RowOfMovies';

const HomeScreen = () => {
  return (
    <BaseView bgcolor={'#000'}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Banner />
        <View style={styles.container}>
          <RowOfMovies title="Popular on Netflix" />
          <RowOfMovies title="Trending Now" />
        </View>
      </ScrollView>
    </BaseView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 8,
  },
});
