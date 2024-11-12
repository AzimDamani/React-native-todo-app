import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import TaskList from '../organisms/TaskList';
import { Task } from '../types/task';
import CustomAddTaskBtn from '../atoms/CustomAddTaskBtn';


type Props = {
  tasks: Task[];
  toggleCompleted: (taskId: string) => void;
  navigateToTaskDetails: (task: Task) => void;
  navigateToAddTask: () => void;
};

const TaskScreenTemplate = ({ tasks, toggleCompleted, navigateToTaskDetails, navigateToAddTask }: Props) => (
  <View style={styles.fullPage}>
    <Text style={styles.greeting}>Hello!!</Text>
    <CustomAddTaskBtn title="Add Task" onPress={navigateToAddTask} />
    <TaskList tasks={tasks} toggleCompleted={toggleCompleted} navigateToTaskDetails={navigateToTaskDetails} />
  </View>
);

export default TaskScreenTemplate;


const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor:"#14223f",
  },
  greeting: {
    fontSize:70,
    color:"#5b8cf1",

  }
})