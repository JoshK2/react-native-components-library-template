import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000bf',
    borderRadius: 30,
    paddingHorizontal: 9,
    paddingVertical: 12,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

const Button = ({text, onPress, style}) => {
  return (
    <TouchableHighlight
      style={{...styles.button, ...style}}
      onPress={onPress}
      underlayColor="#404040">
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  /**
   * Text in the button
   */
  text: PropTypes.string.isRequired,
  /**
   * On press event function
   */
  onPress: PropTypes.func.isRequired,
  /**
   * style object
   */
  style: PropTypes.object,
};

Button.defaultProps = {
  text: 'Button',
};

export {Button};
