import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomText from '../atoms/CustomText';
import CustomButton from '../atoms/CustomButton';
import { Task } from '../types/task';


type Props = {
  initialTask?: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
};

const TaskForm = ({ initialTask, onSave, onCancel }: Props) => {
  const [taskName, setTaskName] = useState(initialTask?.name || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || '');
  const [completed, setCompleted] = useState(initialTask?.completed || false);

  useEffect(() => {
    if (initialTask) {
      setTaskName(initialTask.name);
      setDescription(initialTask.description || '');
      setDueDate(initialTask.dueDate || '');
      setCompleted(initialTask.completed);
    }
  }, [initialTask]);

  const handleSave = () => {
    const newTask: Task = {
      id: initialTask?.id || Date.now().toString(),
      name: taskName,
      description,
      dueDate,
      completed,
    };
    onSave(newTask);
  };

  return (
    <View style={styles.fullPage}>

      <TextInput
        value={taskName}
        onChangeText={setTaskName}
        style={styles.inpArea}
        placeholder="Enter task name"
      />


      <TextInput
        value={description}
        onChangeText={setDescription}
        style={styles.inpArea}
        placeholder="Enter task description"
      />

      <TextInput
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="YYYY-MM-DD"
        style={styles.inpArea}
      />
      <CustomButton
        title={completed ? "Mask as incomplete ?" : "Mark as completed ?"}
        onPress={() => setCompleted(!completed)}
      />
      <CustomButton title="Save" onPress={handleSave} />
      {/* <CustomButton title="C" onPress={onCancel} /> */}

    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor: "#14223f",
    padding: 10,
    // justifyContent: "space-around"
  },
  inpArea: {
    padding: 10,
    fontSize: 30,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    margin: 10

  },

  savebtn: {
    backgroundColor: "#5b8cf1",
    color: "white",
    padding: 10,
    margin: 20,
    width: "90%",
    borderRadius: 20
  }

})

export default TaskForm;
