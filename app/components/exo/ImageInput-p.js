import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../../config/styles';
import Icon from '../Icon';

function ImageInput_P({style}) {
  const [imageUriList, setImageUriList] = useState([{id: 0}]);

  const addImageUri = imageUri =>
    setImageUriList([
      {id: imageUriList.length, uri: imageUri},
      ...imageUriList,
    ]);

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const onSelectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        addImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error reading image', error);
    }
  };

  const onDeleteImage = index => {
    const filter = imageUriList.filter(item => item.id !== index);
    setImageUriList(filter);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imageUriList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return item.uri ? (
            <TouchableOpacity
              style={[styles.item, style]}
              onPress={() => onDeleteImage(item.id)}>
              <Image source={item} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.item, styles.btn, style]}
              onPress={onSelectImage}>
              <Icon
                name="camera"
                size={80}
                color={defaultStyles.colors.medium}
                backgroundColor={defaultStyles.colors.light}
              />
            </TouchableOpacity>
          );
        }}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: defaultStyles.colors.light,
  },
});

export default ImageInput_P;
