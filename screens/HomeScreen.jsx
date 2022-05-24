import { FlatList, View, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'
import EventCard from '../components/EventCard';
import colors from '../config/colors';
import Title from '../components/Title';
import MainButton from '../components/MainButton';

const HomeScreen = ({ navigation }) => {
// const chatroom = new Chatroom(2, [], '');
    const events = [
        {
            id: 1,
            image: require("../assets/yoga.png"),
            title: "Yoga and meditation",
            subTitle: "CBS Yoga",
            date: "Mon, 1.apr 15:00 - 18:00",
            location: "Daigas Have, 2000 Frederiksberg",
    },
    {
            id: 2,
            image: require("../assets/film.png"),
            title: "CBS Film presents: Ghost World",
            subTitle: "CBS Film",
            date: "Mon, 1.apr 15:00 - 18:00",
            location: "Husets Biograf, Rådhusstræde 13, 1466 Copenhagen"
    },
    {
            id: 3,
            image: require("../assets/art.png"),
            title: "CBS Art at Cisternerne",
            subTitle: "CBS Art",
            date: "Mon, 1.apr 15:00 - 18:00",
            location: "Solbjergs Plads 3, 2000 Frederiksberg"
    }
    ]

    return (
   
        <View>

        <FlatList 
        data={events}
        keyExtractor={event => event.id.toString()}
        renderItem={({ item }) => (<EventCard
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            date={item.date}
            location={item.location}
            onPress={() => navigation.navigate('View Event', { event: item })}
            />)}/>
        </View>
);}


export default HomeScreen;