import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CAPSLOCK_STATUS, KEY, LANGUAGE } from '../constants/key';
import DoublePressable from './DoublePressable';
import Icon from './Icon';

const Key = (props) => {
  const { keyValue, capsLockStatus } = props;

  if (keyValue.type === 'character') {
    const isUpperCase = capsLockStatus !== CAPSLOCK_STATUS.DISABLE;
    return <CharKey {...props} isUpperCase={isUpperCase} />;
  }

  if (keyValue.type === 'command') {
    if (keyValue.value === KEY.SHIFT) {
      return <ShiftKey {...props} />;
    }
    if (keyValue.value === KEY.DEL) {
      return <DeleteKey {...props} />;
    }
    if (keyValue.value === KEY.SPACE) {
      return <SpaceKey {...props} />;
    }
    if (keyValue.value === KEY.LANGUAGE) {
      return <LanguageKey {...props} />;
    }
    if (keyValue.value === KEY.DONE) {
      return <DoneKey {...props} />;
    }
  }
};

const IconKey = (props) => {
  return (
    <BaseKey {...props} style={styles.iconKey}>
      <Icon
        size={24}
        source={props.source}
        // tintColor={semantic.content.gray7}
      />
    </BaseKey>
  );
};

const ShiftKey = (props) => {
  const { capsLockStatus } = props;

  const getShiftImage = () => {
    if (capsLockStatus === CAPSLOCK_STATUS.DISABLE) {
      return 'ic_keyboard_shift';
    }
    if (capsLockStatus === CAPSLOCK_STATUS.ENABLE) {
      return 'ic_keyboard_shift_pressed';
    }
    if (capsLockStatus === CAPSLOCK_STATUS.ALWAYS) {
      return 'ic_keyboard_shift_capslock';
    }
  };

  return <IconKey source={getShiftImage()} {...props} />;
};

const DeleteKey = (props) => {
  return <IconKey source={'ic_keyboard_backspace'} {...props} />;
};

const SpaceKey = (props) => {
  return (
    <BaseKey {...props} style={styles.spaceKey}>
      <Text style={styles.keyLabel}>
        {'공백'}
      </Text>
    </BaseKey>
  );
};

const LanguageKey = (props) => {
  const { languageStatus } = props;
  const text = languageStatus === LANGUAGE.ENG ? '!?#' : '123';

  return (
    <BaseKey {...props} style={styles.languageKey}>
      <Text style={styles.keyLabel}>
        {text}
      </Text>
    </BaseKey>
  );
};

const DoneKey = (props) => {
  return (
    <BaseKey {...props} style={styles.doneKey}>
      {/* <ButtonBox disabled style={styles.doneBox}>
        <ButtonText
          label={'완료'}
          size={button.size.medium}
          color={semantic.content.gray7}
        />
      </ButtonBox> */}
    </BaseKey>
  );
};

const CharKey = (props) => {
  const { keyValue, isUpperCase, languageStatus } = props;
    console.log('languageStatus',languageStatus, keyValue.value[languageStatus]);

  const getText = () => {
    const value = keyValue.value[languageStatus];

    if (value?.upper) {
      return isUpperCase ? value.upper : value.lower;
    }

    return value;
  };

  const text = getText();

  return (
    <BaseKey value={text} {...props} style={isUpperCase && styles.lowerKey}>
      <Text style={styles.keyLabel}>
        {text}
      </Text>
    </BaseKey>
  );
};

const BaseKey = (props) => {
  const { value, keyValue, children, onPress, style } = props;

  const onPressKey = () => {
    onPress &&
      onPress(value ?? keyValue.value, { keyValue, isDoubleClick: false });
  };

  const onDoublePressKey = () => {
    onPress &&
      onPress(value ?? keyValue.value, { keyValue, isDoubleClick: true });
  };

  return (
    <DoublePressable onSinglePress={onPressKey} onDoublePress={onDoublePressKey}>
      <View style={[styles.key, style]}>{children}</View>
    </DoublePressable>
  );
};

export default Key;

const styles = StyleSheet.create({
  key: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFE',
    width: 32,
    height: 42,
    marginHorizontal:2,
    marginVertical: 4,
  },
  keyLabel: {
    fontSize: 16,
    fontWeight: '700',
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
  spaceKey: {
    flex: 1,
  },
  languageKey: {
    flex: 0,
    paddingHorizontal: 8,
    paddingVertical: 11,
  },
  doneKey: {
    flex: 0,
    paddingHorizontal: 8,
  },
  doneBox: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
});
