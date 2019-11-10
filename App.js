import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGamesScreen';
const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGamesScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default App;
