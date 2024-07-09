import { View, Text, StyleSheet } from "react-native";

function MealDetails({ complexity, affordability, duration, customStyle, customTextStyle }) {
    return (
        <View style={[styles.details, customStyle]}>
            <Text style={[styles.detailItem, customTextStyle]}>{duration} minutes</Text>
            <Text style={[styles.detailItem, customTextStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, customTextStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
    },
});

