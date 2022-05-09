import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4
    }
})

export default Title;