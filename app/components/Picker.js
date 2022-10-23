import React, {useState} from 'react';
import {Button, Modal, StyleSheet, View, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';
import Text from './Text';
import {TouchableWithoutFeedback} from 'react-native';
import Screen from './Screen';
import PickerItem from './PickerItem';

function Picker({
  icon,
  items,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  setSelectedItem,
  width,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.contianer, {width: width}]}>
          <View style={styles.iconContainer}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={25}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
          </View>
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            key={numberOfColumns}
            data={items}
            keyExtractor={item => item.value}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 30,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.light,
  },
  icon: {
    marginRight: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default Picker;
