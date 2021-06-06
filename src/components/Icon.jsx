import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Icon = (props) => {
  const {
    size = 24,
    tintColor,
    borderRadius = size / 2,
    containerStyle,
  } = props;

  const iconStyle = {
    overflow: 'hidden',
    width: size,
    height: size,
    borderRadius,
  };

  return (
    <View style={[styles.container, iconStyle, containerStyle]}>
      <Image
        style={[iconStyle, { tintColor, position: 'absolute' }]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
