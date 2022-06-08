import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal} from 'react-native';

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 10,
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