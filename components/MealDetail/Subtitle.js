import { StyleSheet, Text, View } from 'react-native';


function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
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
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})