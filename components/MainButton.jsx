import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function MainButton({ title, onPress, backgroundColor = 'primary', color = 'white', style }) {
    return (
        <TouchableOpacity style={[styles.button, styles.shadowProp, { backgroundColor: colors[backgroundColor] }, style]}>
            <Text style={[styles.text, { color: colors[color] }]} onPress={onPress}>{title}</Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingVertical: 15,
        marginBottom: 40
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    // shadowProp: {
    //     shadowColor: 'grey',
    //     shadowOffset: {width: 2, height: 4},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 6
    // },
})

export default MainButton;