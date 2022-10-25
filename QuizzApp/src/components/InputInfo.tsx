import {Dimensions, StyleSheet, TextInput, TextInputProps} from 'react-native';
import React, {useCallback} from 'react';
interface Props extends TextInputProps {
  title: string;
  keyName: string;
  onChangeValue: (keyName: string, title: string) => void;
}

const width = Dimensions.get('window').width;

const InputInfo = (props: Props) => {
  const {title, keyName, onChangeValue, ...restProps} = props;

  const onChangeText = useCallback(
    (value: string) => {
      onChangeValue(keyName, value);
    },
    [onChangeValue, keyName],
  );

  return (
    <TextInput
      {...restProps}
      placeholder={title}
      onChangeText={onChangeText}
      placeholderTextColor={'gray'}
      style={styles.inputValue}
    />
  );
};

export default InputInfo;

const styles = StyleSheet.create({
  inputValue: {
    width: width - 22,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 38,
    marginTop: 30,
    padding: 10,
  },
});
