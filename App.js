import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            cardStyle: { backgroundColor: '#3f2f25' },  // background color for all screens instead of contentStyle
            headerStyle: {
              backgroundColor: '#2c211a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }>
          <Stack.Screen name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: 'Meals Overview',
            }}
          />
          <Stack.Screen name="MealDetail"
            component={MealDetailScreen}


          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
