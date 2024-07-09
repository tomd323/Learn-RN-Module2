import { View, Pressable, Text, StyleSheet, Image, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import Meal from "../models/models/meal"
import MealDetails from './MealDetails';

function MealItem({ id, title, imageURL, complexity, affordability, duration }) {

    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    return (
        <View style={styles.MealItem}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    (pressed ? styles.buttonPressed : null)
                }
                onPress={onPress}
            >
                <View style={styles.innerContainer}>

                    <View>
                        <Image source={{ uri: imageURL }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View >
    );

}

export default MealItem;

const styles = StyleSheet.create({

    MealItem: {
        margin: 16,
        borderRadius: 10,
        overflow: Platform.os === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer: {
        borderRadius: 10,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },

});