import Toast from 'react-native-simple-toast';

export default appToast = (message) => {
  Toast.show(
    message,
    Toast.LONG,
    ['UIAlertController'],
  );
};
