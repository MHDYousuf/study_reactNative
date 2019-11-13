import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Color from '../constants/Color';

const generateRandombetween = (max, min, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return generateRandombetween(max, min, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setcurrentGuess] = useState(
    generateRandombetween(1, 100, props.userChoice),
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Opponent Guess</Text>
      <NumberContainer style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </NumberContainer>
      <Card style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnlower} onPress={() => {}}>
          <Text style={styles.btnlowertext}>Lower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnupper} onPress={() => {}}>
          <Text style={styles.btnupperText}>Greater</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  heading: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  numberContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 7,
    borderColor: Color.feature,
  },
  number: {
    textAlign: 'center',
    color: Color.feature,
  },
  btnlower: {
    backgroundColor: Color.feature,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnlowertext: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  btnupper: {
    backgroundColor: Color.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnupperText: {
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default GameScreen;
