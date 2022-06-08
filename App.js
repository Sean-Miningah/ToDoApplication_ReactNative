// import { useState } from react;
import { StyleSheet, Text, View , Button, TextInput, ScrollView, FlatList } from 'react-native';
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

  // the key property will be used in the flatlist
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
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
        <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={itemData => {
          return (
            <View  style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}}
          keyExtractor={(item, index) => {return item.id}}
        />
          {/* {courseGoals.map((goal) =>  */}
          
          {/* )} */}
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
  },
  goalItem: {
    margin: 8, 
    padding: 8,
    borderRadius: 6, 
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText:{
    color: 'white',
  },
});
