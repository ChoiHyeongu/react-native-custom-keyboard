import React, { useState, useMemo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  KEYBOARD_KEYS,
  CAPSLOCK_STATUS,
  KEY,
  LANGUAGE,
} from '../constants/key';
import Key from './Key';

const Keyboard = (props) => {
  const { value, onChangeText, onComplete } = props;
  const [languageStatus, setLanguageStatus] = useState(LANGUAGE.ENG);
  const [capsLockStatus, setCapsLockStatus] = useState(CAPSLOCK_STATUS.DISABLE);

  const checkIsUpperMode = () => capsLockStatus !== CAPSLOCK_STATUS.DISABLE;

  const isUpperMode = useMemo(checkIsUpperMode, [capsLockStatus]);

  const onChangeValue = useCallback((newValue) => {
    if (typeof onChangeText === 'function') {
      onChangeText(newValue);
    }
  });

  const onKeyPress = useCallback((value, data) => {
    if (value === KEY.SHIFT) {
      onPressShift(data);
    } else if (value === KEY.DEL) {
      onDeletePress();
    } else if (value === KEY.LANGUAGE) {
      onPressLanguage();
    } else if (value === KEY.SPACE) {
      onPressCharacter(' ');
    } else if (value === KEY.DONE) {
      onPressDone();
    } else {
      onPressCharacter(value);
    }
  });

  const onPressLanguage = () => {
    changeLanguage();
  };

  const changeLanguage = () => {
    if (languageStatus === LANGUAGE.ENG) {
      setLanguageStatus(LANGUAGE.NUMBER);
    } else {
      setLanguageStatus(LANGUAGE.ENG);
    }
  };

  const onPressShift = ({ isDoubleClick }) => {
    changeCapsLockStatus(isDoubleClick);
  };

  const onPressDone = () => {
    if (typeof onComplete === 'function') {
      onComplete();
    }
  };

  const changeCapsLockStatus = (isDoubleClick) => {
    if (isDoubleClick && isUpperMode) {
      setCapsLockStatus(CAPSLOCK_STATUS.ALWAYS);
    } else {
      if (isUpperMode) {
        setCapsLockStatus(CAPSLOCK_STATUS.DISABLE);
      } else {
        setCapsLockStatus(CAPSLOCK_STATUS.ENABLE);
      }
    }
  };

  const onPressCharacter = (inputValue) => {
    const newChar = isUpperMode ? inputValue.toUpperCase() : inputValue;
    onChangeValue(value + newChar);
    if (capsLockStatus === CAPSLOCK_STATUS.ENABLE) {
      setCapsLockStatus(CAPSLOCK_STATUS.DISABLE);
    }
  };

  const onDeletePress = () => {
    if (value.length > 0) {
      onChangeValue(value.slice(0, -1));
    }
  };

  console.log('KEYBOARD_KEYS',KEYBOARD_KEYS);

  return (
    <View style={styles.contaienr}>
      <View style={styles.row}>
        {KEYBOARD_KEYS[0].map((key) => {
          console.log('KEY', key);
          return (
            <Key
              key={`row0-${key}`}
              keyValue={key}
              languageStatus={languageStatus}
              capsLockStatus={capsLockStatus}
              onPress={onKeyPress}
            />
          )
        })}
      </View>
      <View style={styles.row}>
        {KEYBOARD_KEYS[1].map((key) => (
          <Key
            key={`row1-${key}`}
            keyValue={key}
            languageStatus={languageStatus}
            capsLockStatus={capsLockStatus}
            onPress={onKeyPress}
          />
        ))}
      </View>
      <View style={[styles.row, { paddingHorizontal: 4 }]}>
        {KEYBOARD_KEYS[2].map((key) => (
          <Key
            key={`row2-${key}`}
            keyValue={key}
            languageStatus={languageStatus}
            capsLockStatus={capsLockStatus}
            onPress={onKeyPress}
          />
        ))}
      </View>
      <View style={styles.row}>
        {KEYBOARD_KEYS[3].map((key) => (
          <Key
            key={`row3-${key}`}
            keyValue={key}
            languageStatus={languageStatus}
            capsLockStatus={capsLockStatus}
            onPress={onKeyPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    paddingHorizontal: 4,
    backgroundColor: '#D1D5DB',
  },
  row: {
    flexDirection: 'row',
  },
  key: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconKey: {
    flex: 0,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  blankKey: {
    paddingVertical: 21,
  },
  specialKey: {},
  lowerKey: {
    paddingBottom: 5,
  },
  blank: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default Keyboard;
