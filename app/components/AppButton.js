import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
});

export default AppButton;
