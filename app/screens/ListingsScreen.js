import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

const listings = [
  {
    id: 1,
    title: 'Burger to meal',
    price: 100,
    image: require('../assets/burger.jpg'),
  },
  {
    id: 2,
    title: 'Couch in better condition',
    price: 300,
    image: require('../assets/couch.jpg'),
  },
];

function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={'$' + item.price}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingsScreen;
