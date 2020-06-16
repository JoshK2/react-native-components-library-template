import React from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from '../button';

const styles = StyleSheet.create({
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: {width: 300, height: 300, marginBottom: 10},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  description: {color: '#b1b1b1', marginBottom: 10},
  price: {
    color: '#7de3bb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notInStock: {textAlign: 'center'},
});

const Product = ({title, description, price, image, onPress}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.rowContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      {onPress && (
        <Button text="Add to Cart" onPress={onPress} style={{width: 300}} />
      )}
    </View>
  );
};

Product.propTypes = {
  /**
   * product title
   */
  title: PropTypes.string.isRequired,
  /**
   * product description
   */
  description: PropTypes.string.isRequired,
  /**
   * product pricing
   */
  price: PropTypes.string.isRequired,
  /**
   * product image url
   */
  image: PropTypes.string.isRequired,
  /**
   * On press event function that will show a button under the image
   */
  onPress: PropTypes.func,
};

Product.defaultProps = {
  title: 'product title',
  description: 'product description',
  price: '$100',
  image:
    'https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i1-9944e829-002c-4a6b-93ed-cc8801c7eb0c/air-vapormax-360-mens-shoe-b09bdB.jpg',
  onPress: () => Alert.alert('on press!'),
};

export {Product};
