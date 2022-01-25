import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  taglineCTA: {
    textDecorationLine: 'underline',
  },
  btnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },
});
