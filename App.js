import { Button, StyleSheet, TextInput, View, FlatList, ImageBackground } from "react-native";
import { useState } from "react";
import GoalItem from "./Screens/GoalItem";



export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredGoal) {
    setEnteredGoalText(enteredGoal);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
    setEnteredGoalText('');
  }

  return (
    <ImageBackground
      source={require('./images/image1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Goals"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>

        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem
                text={item.text}
                onDelete={() =>
                  setCourseGoals(currentCourseGoals =>
                    currentCourseGoals.filter(goal => goal.key !== item.key)
                  )
                }
              />
            )}
            keyExtractor={item => item.key}
            alwaysBounceVertical={false}
          />

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
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
    padding: 8,
  },
  goalContainer: {
    flex: 6
  }
});