import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import Text from '../components/Text';
import ListItem from '../components/lists/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <FastImage style={styles.image} source={{uri: listing.images[0].url}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}$</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/me.jpg')}
            title="Hamza EL GATIA 🌴"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: '500',
    color: colors.black,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
