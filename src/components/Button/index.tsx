import React, { useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { Props, colors } from './types';

const Button = ({ text, type, onPress }: Props) => {
  const buttonStyle = useMemo(() => {
    switch (type) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'success':
        return colors.success;
      case 'danger':
        return colors.danger;
      case 'warning':
        return colors.warning;
      case 'info':
        return colors.info;
      case 'light':
        return colors.light;
      case 'dark':
        return colors.dark;
      default:
        throw new Error('Button type not found');
    }
  }, [type]);

  const textStyle = useMemo(() => {
    switch (type) {
      case 'primary':
      case 'secondary':
      case 'success':
      case 'danger':
      case 'dark':
        return colors.light;

      case 'warning':
      case 'info':
      case 'light':
        return colors.dark;

      default:
        throw new Error('Button type not found');
    }
  }, [type]);

  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.btn, { backgroundColor: buttonStyle }]}
        onPress={onPress}
      >
        <Text style={[styles.btnText, { color: textStyle }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
