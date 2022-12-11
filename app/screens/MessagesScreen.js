import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import Screen from '../components/Screen';

function MessagesScreen() {
  const initMessages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/me.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/me.jpg'),
    },
  ];

  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteMessage = message => {
    const filteredMessages = messages.filter(m => m.id !== message.id);
    setMessages(filteredMessages);
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/me.jpg'),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessagesScreen;
