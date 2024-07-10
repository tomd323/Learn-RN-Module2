import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function IconButton({ onPress, icon, color }) {

    return (
        <Pressable
            style={styles.icon}
            onPress={onPress}
        >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );

}

export default IconButton;

const styles = StyleSheet.create({
    icon: {
        paddingRight: 24,
    },
});
