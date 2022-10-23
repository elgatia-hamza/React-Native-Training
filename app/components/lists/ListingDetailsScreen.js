import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Text from '../Text';
import ListItem from '../ListItem';

import colors from '../../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/burger.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Burger meal to eat</Text>
        <Text style={styles.price}>100$</Text>
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
