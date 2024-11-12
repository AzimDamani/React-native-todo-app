import React from "react";
import { View, StyleSheet, Alert } from "react-native";

import { Task } from "../types/task";
import CustomText from "../atoms/CustomText";
import TaskForm from "../organisms/TaskForm";
import CustomButton from "../atoms/CustomButton";
import DeleteBtn from "../atoms/DeleteBtn";

const TaskDetailsPage = ({ route, navigation }: any) => {
  const { item, updateTask, deleteTask } = route.params;

  const handleSave = (updatedTask: Task) => {
    updateTask(updatedTask);
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert("Are you sure?", "This will delete the task.", [
      {
        text: "Yes",
        onPress: () => {
          deleteTask(item.id);
          navigation.goBack();
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.fullPage}>
      <TaskForm initialTask={item} onSave={handleSave} onCancel={() => navigation.goBack()} />

      <DeleteBtn title="Delete Task" onPress={handleDelete}  />
    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    backgroundColor:"#14223f",
    padding:10,
    justifyContent:"space-around"
  },
 
})
export default TaskDetailsPage;
