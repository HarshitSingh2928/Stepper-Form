import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import Screen4 from './Screens/Screen4';
import { activeNumberReducer, selectedAddonsReducer, selectedDurationReducer, selectedPlanReducer } from './redux/reducers/Reducer';

const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  selectedAddons: selectedAddonsReducer,
  selectedPlan:selectedPlanReducer,
  selectedDuration:selectedDurationReducer,
  activeNumber:activeNumberReducer
  
});

const store = createStore(rootReducer); 

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
