import { View, Text, StyleSheet } from 'react-native';
import Meal from "../models/models/meal"

function MealItem({ title }) {

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );

}

export default MealItem;

