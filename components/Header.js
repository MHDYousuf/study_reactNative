import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    paddingTop: 10,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});
export default Header;
