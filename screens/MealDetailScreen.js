import { useLayoutEffect } from 'react';

import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import IconButton from '../components/IconButton';

function MealDetailScreen({ navigation, route, title }) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Favorite button pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onPress={headerButtonPressHandler} icon={"star"} color={"white"} />
            )
        });
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                customTextStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 22,
    },
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

    listContainer: {
        maxWidth: '80%',

    },
    listOuterContainer: {
        alignItems: 'center',
    }

});



