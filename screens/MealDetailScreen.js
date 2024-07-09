import { Text, View, StyleSheet, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/list';

function MealDetailScreen({ navigation, route, title }) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                customTextStyle={styles.detailText}
            />
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </View>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8,
        color: 'white',
    },

    detailText: {
        color: 'white',
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e2b497',
        textAlign: 'center',
        margin: 6,
    },

    subtitleContainer: {
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }


});



