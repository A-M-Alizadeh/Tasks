
import  AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key, value, isJson = true) => {
  try {
    await AsyncStorage.setItem(
      `storage_${key}`,
      isJson ? JSON.stringify(value) : value,
    );
  } catch (error) {
    console.log(`error in saving ${key} in storage: `, error);
  }
};

const getItem = async (key, isJson = true) => {
  try {
    const value = await AsyncStorage.getItem(`storage_${key}`);
    if (value !== null) {
      return isJson ? JSON.parse(jsonValue) : value;
    } else {
      return null;
    }
  } catch (error) {
    console.log(`error in retrieving ${key} from storage: `, error);
  }
};

const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(`storage_${key}`);
  } catch (error) {
    console.log(`error in removing ${key} from storage: `, error);
  }
};

export default {
  setItem,
  getItem,
  removeItem,
};
