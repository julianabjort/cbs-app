import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';

function MainButton({ icon, title, onPress, backgroundColor = 'primary', color = 'white', style }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: colors[backgroundColor] }, style]}>
            {icon && <Ionicons name={icon} size={20} color={colors.primary} style={styles.icon} />}
            <Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        paddingVertical: 15,
        marginBottom: 40, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    icon: {
        marginRight: 6
    }
    // shadowProp: {
    //     shadowColor: 'grey',
    //     shadowOffset: {width: 2, height: 4},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 6
    // },
})

export default MainButton;