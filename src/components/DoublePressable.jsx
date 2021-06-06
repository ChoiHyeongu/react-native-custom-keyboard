import React, { useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const DOUBLE_PRESS_DELAY = 400;

const DouablePressable = (props) => {
  const { onSinglePress, onDoublePress } = props;

  const lastPressedTime = useRef(0);

  const onPress = () => {
    const pressedTime = new Date().getTime();
    const pressedDelta = pressedTime - lastPressedTime.current;

    if (pressedDelta < DOUBLE_PRESS_DELAY) {
      handleDoublePress();
    } else {
      handleSinglePress();
    }

    lastPressedTime.current = pressedTime;
  };

  const handleSinglePress = () => {
    onSinglePress();
  };

  const handleDoublePress = () => {
    onDoublePress();
  };

  return <TouchableWithoutFeedback {...props} onPress={onPress} />;
};

export default DouablePressable;
