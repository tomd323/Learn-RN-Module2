import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'; // hook to get the route object - alternative to route prop
import { useEffect, useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

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


    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageURL: item.imageUrl,
            complexity: item.complexity,
            affordability: item.affordability,
            duration: item.duration,
        }

        return (
            <MealItem {...mealItemProps} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});