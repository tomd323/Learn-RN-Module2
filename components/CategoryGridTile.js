import { Pressable, Text, View, StyleSheet } from 'react-native';

function CategoryGridTile({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable>
                <Text>{title}</Text>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 3,

    },
});