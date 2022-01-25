import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 10,
    top: 40,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    width: 25,
    height: 25,
  },
  logo: {
    resizeMode: 'contain',
    width: 100,
    height: 20,
  },
});
