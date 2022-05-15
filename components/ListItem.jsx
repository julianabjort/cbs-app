import React from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors';

function ListItem({ title, description, image, date, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.lighter}
                >
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                    <View>
                        <Text style={styles.date}>{date}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 0.5,
        borderColor: colors.light
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: { 
        fontWeight: '600',
        marginVertical: 2
    },
    text: {
        color: colors.medium
    },
    date: {
        color: colors.medium,
        position: 'absolute',
        right: -80
    }
})

export default ListItem;