import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';
import { Task } from '../types/task';

const AddTaskScreen = ({ navigation, route }: any) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescr, setTaskDescr] = useState("");
  const [taskDD, setTaskDD] = useState("");
  const addTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      name: taskName,
      description: taskDescr,
      dueDate: taskDD,
      completed: false,
    };
    route.params.addTask(newTask);
    navigation.goBack();
  };
  return (
    <View style={styles.fullPage}>
      <View>
      <TextInput style={styles.inpArea}
        placeholder="Enter Task Name"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TextInput style={styles.inpArea}
        placeholder='Enter Task Descreption'
        value={taskDescr}
        onChangeText={setTaskDescr} />
      <TextInput style={styles.inpArea}
        value={taskDD}
        onChangeText={setTaskDD}
        placeholder="YYYY-MM-DD"
      />
      </View>
      <Pressable style={styles.savebtn} onPress={addTask}>
        <Text style={{color:"white", fontSize:20, justifyContent:"center",textAlign:"center"}}>Save Task</Text>
      </Pressable>
    </View>
  )
}
export default AddTaskScreen;


const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor:"#14223f",
    padding:10,
    justifyContent:"space-around"
  },
  inpArea:{
    padding:10,
    fontSize:30,
    color:"white",
    borderWidth:1,
    borderColor:"white",
    borderRadius:20,
    margin:10

  },

  savebtn:{
    backgroundColor:"#5b8cf1",
    color:"white",
    padding:10,
    margin:20,
    width:"90%",
    borderRadius:20
    }
 
})