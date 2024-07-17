import { Text, View } from 'react-native';
import MealList from '../components/MealList';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';


function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const FAVORITE_MEALS = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  if (FAVORITE_MEALS.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MealList items={FAVORITE_MEALS} />
    </View>
  );
}

export default FavoritesScreen;