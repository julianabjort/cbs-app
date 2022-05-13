import React from 'react';
import { StyleSheet, Text } from 'react-native';

function Title({ children, style }) {
    return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 4
    }
})

export default Title;