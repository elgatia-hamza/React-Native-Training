import {useEffect, useState} from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [location, setLocaiton] = useState();

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync();
      setLocaiton({latitude, longitude});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
