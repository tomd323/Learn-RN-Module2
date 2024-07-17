import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'; // hook to get the route object - alternative to route prop
import { useEffect, useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    const displayedMeals = MEALS.filter((mealItem) => {
        if (mealItem.categoryIds.indexOf(categoryId) >= 0) {
            return true;
        }
    });


    useLayoutEffect(() => {

        navigation.setOptions({ title: categoryTitle });
    }, [categoryTitle, navigation]);

    return <MealList items={displayedMeals} />;

}

export default MealsOverviewScreen;


