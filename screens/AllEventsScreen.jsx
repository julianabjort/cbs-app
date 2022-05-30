import React from "react";
import { FlatList, View } from "react-native";
import EventCard from "../components/EventCard";
import { EVENTS } from "../data";

function AllEventsScreen({ navigation }) {

  return (
    <View>
      <FlatList
      data={EVENTS}
      keyExtractor={event => event.id.toString()}
      renderItem={({ item }) => (<EventCard
        image={item.image}
        title={item.title}
        subTitle={item.subTitle}
        date={item.date}
        location={item.location}
        onPress={() => navigation.navigate('View Event Discover', { event: item })}
        />)} 
      />
    </View>
  )
}
export default AllEventsScreen;