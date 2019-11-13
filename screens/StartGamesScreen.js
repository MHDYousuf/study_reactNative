import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Color from '../constants/Color';
const StartGamesScreen = props => {
  const [enteredValue, setenteredValue] = useState('');
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();
  const numberInputHandler = InputText => {
    setenteredValue(InputText.replace(/[^0-9]/, ''));
  };

  const resetInputHandler = () => {
    setenteredValue('');
    setconfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Not a Valid Number', 'Enter a number between 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
    }
    setconfirmed(true);
    setselectedNumber(chosenNumber);
    setenteredValue('');
  };
  let confirmOutput;
  if (confirmed) {
    confirmOutput = (
      <Card style={{padding: 10, marginVertical: 10}}>
        <Text style={{textAlign: 'center'}}>You Selected:</Text>
        <View style={styles.textSelectedContainer}>
          <Text style={styles.textSelected}>{selectedNumber}</Text>
        </View>
        <TouchableOpacity
          style={styles.startGameSubmitted}
          onPress={() => {
            props.onStartGame(selectedNumber);
          }}>
          <Text style={styles.textinSubmitted}>Start Game</Text>
        </TouchableOpacity>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Game Starts now</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number!</Text>
          <Input
            keyboardType="number-pad"
            placeholder="Enter a Number"
            blurOnSubmit={true}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            style={styles.input}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="reset"
              onPress={resetInputHandler}
              color={Color.accent}
            />
            <Button
              title="submit"
              onPress={confirmInputHandler}
              color={Color.primary}
            />
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 100,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textSelectedContainer: {
    padding: 25,
  },
  textSelected: {
    textAlign: 'center',
    borderWidth: 2,
    padding: 10,
    borderRadius: 7,
    borderColor: Color.feature,
    color: Color.feature,
  },
  startGameSubmitted: {
    padding: 10,
    backgroundColor: Color.feature,
    borderRadius: 5,
  },
  textinSubmitted: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
export default StartGamesScreen;
