import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { cars } from '../../../assets/cars';
import CarItem from '../../components/CarItem';

const CarList = ({}: Props) => {
  const renderItem = ({ item }: any) => <CarItem {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        snapToAlignment='start'
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarList;
