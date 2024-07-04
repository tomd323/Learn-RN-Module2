import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native'; // hook to get the route object - alternative to route prop

import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        if (mealItem.categoryIds.indexOf(categoryId) >= 0) {
            return true;
        }
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title} />;
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