import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput(props){
/* 
    Creating a new state called enteredGoalText and
    updating this state with the setEnteredGoalText function 
*/

const [enteredGoalText, setEnteredGoalText] = useState('');

function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
};

function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
}
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                    
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image:{
        width: 100, 
        height: 100, 
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        marginBottom: 14,
    }, 
    buttonContainer: {
        flexDirection: 'row',

    },
    button: {
        width:100,
        marginHorizontal: 8,
    }
})

export default GoalInput;