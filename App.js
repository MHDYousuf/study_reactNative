import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGamesScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setuserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
  };

  let content = <StartGamesScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default App;
