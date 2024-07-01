import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

function CategoriesScreen({ navigation }) {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({

});