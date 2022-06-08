// import { useState } from react;
import { StyleSheet, FlatList, View, Button } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  /*
    Initialisation of state and 
    updating of state with setCourseGoals funtion
  */ 

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false); 

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  // the key property will be used in the flatlist
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => 
      [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
      setModalIsVisible(false);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goals)=> goals.id !== id);
    })
  }
  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput 
        visible={modalIsVisible}
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}
        />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          alwaysBounceVertical={false} 
          renderItem={itemData => {
            return <GoalItem 
                    text={itemData.item.text} 
                    id = {itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                    />}}
          keyExtractor={(item, index) => {return item.id}}
        />
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
  goalsContainer : {
    flex: 5,
  },
  
});
