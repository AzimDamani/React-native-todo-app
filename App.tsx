
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
} from 'react-native';
import Home from './src/screens/Home';
import AddTaskScreen from './src/screens/AddTaskScreen';

import TaskDetailsPage from './src/screens/TaskDetailsPage';
// not using for now 
// export type RootStackParamList = {
//   Home: undefined;
//   AddTaskScreen: undefined
// };

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#14223f',
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title:"Home",
            headerShown: false
          }}
         />
         <Stack.Screen 
         name='AddTaskScreen'
         component={AddTaskScreen}
         options={{
          title:"Add New Task"
        }}
         />
         <Stack.Screen 
         name = "TaskDetailsPage"
         component={TaskDetailsPage}
         options={{
          title:"Task Details"
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
