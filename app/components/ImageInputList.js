import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUriList, onAddImage, onRemoveImage}) {
  const scrollViewRef = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUriList.map(imageUri => (
            <View key={imageUri} style={styles.image}>
              <ImageInput
                imageUri={imageUri}
                onChangeImage={() => onRemoveImage(imageUri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
