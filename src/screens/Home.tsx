import React, { useState } from "react";
import { Button, FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { Task } from "../types/task";
import { useFocusEffect } from "@react-navigation/native";
import TaskScreenTemplate from "../Template/TaskScreenTemplate";
const Home = ({ navigation }: any) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const toggleCompleted = (taskId: string) => {
        setTasks(prevTasks => 
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };
    
    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const updateTask = (updatedTask: Task) => {
        setTasks(tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        ));
    };

    const navigateToTaskDetails = (item: Task) => {
        navigation.navigate('TaskDetailsPage', { item, updateTask, deleteTask });
      };
    
      const navigateToAddTask = () => {
        navigation.navigate('AddTaskScreen', { addTask });
      };

      useFocusEffect(
        React.useCallback(() => {
        //   setTasks([...tasks]);
        }, [])
      );

    return (
        
        <TaskScreenTemplate 
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        navigateToTaskDetails={navigateToTaskDetails}
        navigateToAddTask={navigateToAddTask}
        />
  
        
    )
}

export default Home;
