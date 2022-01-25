import React from 'react';
import { Image, View, Linking, Pressable } from 'react-native';
import { Props } from './types';
import { styles } from './styles';

const Header = ({}: Props) => {
  const handlePress = () => Linking.openURL('https://www.tesla.com/');

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
      </Pressable>
      <Image
        style={styles.menu}
        source={require('../../../assets/images/menu.png')}
      />
    </View>
  );
};

export default Header;
