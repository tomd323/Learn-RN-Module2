import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // hook to get the route object - alternative to route prop

import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ navigation, route }) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen {categoryId}</Text>
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