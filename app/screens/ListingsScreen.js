import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import routes from '../navigation/routes';
import listingApi from '../api/listings';
import AppText from '../components/Text';
import Button from '../components/Button';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
  const getListingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingsApi.request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Card
              imageUrl={item.images[0].url}
              title={item.title}
              subTitle={'$' + item.price}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
});

export default ListingsScreen;
