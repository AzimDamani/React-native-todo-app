import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CustomText from "../atoms/CustomText";
import CompletedBtn from "../atoms/CompletedBtn";

type Props = {
  name: string;
  completed: boolean;
  onToggle: () => void;
  onPress: () => void;
};

const TaskItem = ({ name, completed, onToggle, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={completed === false ? styles.taskItem: styles.taskItemNot}>
      <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between"}}>
        <CustomText>{name}</CustomText>
        <Pressable onPress={onToggle}>
          <CompletedBtn>{completed ? 'Completed' : 'Not done yet'}</CompletedBtn>
        </Pressable>
      </View>
    </Pressable>
  )
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor:"#fdfdfd",
    padding:10,
    margin:5,
    borderRadius:20
  },
  taskItemNot: {
    backgroundColor:"#cbffa9",
    padding:10,
    margin:5,
    borderRadius:20
  }
})