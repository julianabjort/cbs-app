import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'

import colors from '../config/colors';

function Input({ icon, ...otherProps }){

    return (
        <View style={styles.container}>
            {icon && <Ionicons name={icon} size={20} color={colors.light} />}
            <TextInput 
                style={styles.textInput} {...otherProps}
                />   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    textInput: {
        marginLeft: 10
    },
    icon:{
        marginRight:10
    },
    
})

export default Input;