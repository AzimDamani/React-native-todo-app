import React, { useState, useEffect } from 'react';
import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import { Task } from '../types/task';


type Props = {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onDelete: () => void;
};

const TaskDetailForm = ({ task, onSave, onDelete }: Props) => {
  const [taskName, setTaskName] = useState(task.name);
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');
  const [completed, setCompleted] = useState(task.completed);

  useEffect(() => {
    setTaskName(task.name);
    setDescription(task.description || '');
    setDueDate(task.dueDate || '');
    setCompleted(task.completed);
  }, [task]);

  const handleSave = () => {
    const updatedTask: Task = {
      ...task,
      name: taskName,
      description,
      dueDate,
      completed,
    };
    onSave(updatedTask);
  };

  return (
    <View style={styles.container}>
      <CustomText>Task Name:</CustomText>
      <TextInput
        value={taskName}
        onChangeText={setTaskName}
        style={styles.input}
        placeholder="Enter task name"
      />

      <CustomText>Description:</CustomText>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        placeholder="Enter task description"
      />

      <CustomText>Due Date:</CustomText>
      <TextInput
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="YYYY-MM-DD"
        style={styles.input}
      />

      <Pressable onPress={() => setCompleted(!completed)} style={styles.completedToggle}>
        <CustomText>{completed ? 'Completed' : 'Not Completed'}</CustomText>
      </Pressable>

      <View style={styles.buttonContainer}>
        <CustomButton title="Save Changes" onPress={handleSave} />
        <CustomButton title="Delete Task" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  completedToggle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default TaskDetailForm;
