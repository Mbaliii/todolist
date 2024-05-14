import { View, TextInput, Button, StyleSheet } from "react-native";


function GoalInput(props) {
    return (
        <View key={props.id} styles={styles.inputContainer}>
            <TextInput styles={styles.textInput} placeholder="Your Goals" onChangeText={goalInputHandler} />
            <Button title="    add     " onPress={props.onAddGoal} />
        </View>
    )
};

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: "86%",
        marginRight: 8,
        padding: 8
    }
})