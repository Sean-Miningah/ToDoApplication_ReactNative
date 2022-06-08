import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {

    return (
        <Pressable 
          onPress={props.onDeleteItem.bind(this, props.id)}
          android_ripple={{color:'red'}}

        //   If pressed is true we return styles.pressedItem or else we return nothing
          style={({pressed})=> pressed && styles.pressedItem}
        >
            <View  style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8, 
        padding: 8,
        borderRadius: 6, 
        backgroundColor: '#5e0acc',
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText:{
        color: 'white',
    },
});