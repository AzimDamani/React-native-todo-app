import React from 'react';
import { FlatList, View } from 'react-native';
import TaskItem from '../molecules/TaskItem';
import { Task } from '../types/task';

type Props = {
  tasks: Task[];
  toggleCompleted: (taskId: string) => void;
  navigateToTaskDetails: (task: Task) => void;
};

const TaskList = ({ tasks, toggleCompleted, navigateToTaskDetails }: Props) => (
 <View style={{marginTop:10}}>
   <FlatList
    data={tasks}
    renderItem={({ item }) => (
      <TaskItem
        name={item.name}
        completed={item.completed}
        onToggle={() => toggleCompleted(item.id)}
        onPress={() => navigateToTaskDetails(item)}
      />
    )}
    keyExtractor={(item) => item.id}
  />
 </View>
);

export default TaskList;
