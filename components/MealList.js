import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealList({ items }) {

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
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );

}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});