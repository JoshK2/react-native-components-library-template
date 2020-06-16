import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const ViewContainer = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

ViewContainer.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * style object
   */
  style: PropTypes.object,
};

ViewContainer.defaultProps = {
  children: <Text>view container</Text>,
};

export {ViewContainer};
