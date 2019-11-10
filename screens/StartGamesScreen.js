import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
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
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 9999) {
      Alert.alert('Not a Valid Number', 'Enter a number between 1 and 9999', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
    }
    setconfirmed(true);
    setselectedNumber(chosenNumber);
    setenteredValue('');
  };
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
            maxLength={4}
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
});
export default StartGamesScreen;
