// import { useState } from react;
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';
import { useState, react} from 'react';


export default function App() {

  /* 
    Creating a new state called enteredGoalText and
    updating this state with the setEnteredGoalText function 
  */

  const [enteredGoalText, setEnteredGoalText] = useState('');

  /*
    Initialisation of state and 
    updating of state with setCourseGoals funtion
  */ 
 
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  
          style={styles.textInput} 
          placeholder='Your course goal'
          onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }, 
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  }, 
  goalsContainer : {
    flex: 5,
  }
});
