import React from 'react';
import { CarItemProps } from './types';
import { styles } from './styles';
import { ImageBackground, Text, View } from 'react-native';
import Button from '../Button';

const CarItem = ({ name, tagline, taglineCTA, image }: CarItemProps) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          text='Custom order'
          type='dark'
          onPress={() => console.warn('custom order')}
        />
        <Button
          text='Existing order'
          type='light'
          onPress={() => console.warn('Existing order')}
        />
      </View>
    </View>
  );
};

export default CarItem;
