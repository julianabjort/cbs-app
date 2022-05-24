import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Title from './Title';
import colors from '../config/colors';

function EventCard({ image, title, subTitle, date, location, onPress }) {
    return (
            <View style={[styles.card, styles.shadowProp]}>
                <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.lighter}
                >
                <View>
                    <Image style={styles.image}source={image}/>
                    <View style={styles.content}>
                        <Title style={styles.text}>{title}</Title>
                        <Text style={styles.text}>{subTitle}</Text>
                        <Text style={styles.text}>{date}</Text>
                        <Text style={styles.text}>{location}</Text>
                    </View>
                </View>
                </TouchableHighlight>
            </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        margin: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    content: {
        marginLeft: 16,
        marginVertical: 16,
    },
    text: {
        paddingVertical: 1,
    },
    
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 8
    },
})

export default EventCard;