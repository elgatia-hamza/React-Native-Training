import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedNavigator from '../navigation/FeedNavigator';
import ListingEditingScreen from '../screens/ListingEditingScreen';
import AccountNavigator from './AccountNavigator';
import NewListingTabButton from '../components/NewListingTabButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEditing"
        component={ListingEditingScreen}
        options={({navigation, route}) => ({
          tabBarButton: () => (
            <NewListingTabButton
              onPress={() => navigation.navigate(routes.LISTING_EDITING)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
