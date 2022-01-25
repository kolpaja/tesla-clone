import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { styles } from './styles';

const SP = () => {
  const handlePress = () =>
    Linking.openURL('https://github.com/kolpaja/tesla-clone');

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>SP</Text>
      </Pressable>
    </View>
  );
};

export default SP;
