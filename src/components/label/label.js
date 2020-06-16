import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  label: {
    backgroundColor: '#1975d2',
    borderRadius: 30,
    paddingHorizontal: 9,
    paddingVertical: 12,
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

const Label = ({text, style}) => {
  return <Text style={{...styles.label, ...style}}>{text}</Text>;
};

Label.propTypes = {
  /**
   * Text in the label
   */
  text: PropTypes.string.isRequired,
  /**
   * style object
   */
  style: PropTypes.object,
};

Label.defaultProps = {
  text: 'label',
};

export {Label};
