import React from "react";
import { FlatList, SectionList, StyleSheet, View, Modal } from "react-native";
import EventCard from "../components/EventCard";
import { EVENTS } from "../data";
import { useSelector, useDispatch } from 'react-redux';
import colors from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Title from '../components/Title';
import MainButton from '../components/MainButton';
import { useEffect, useState } from 'react';
import { createEvent, fetchEvents } from "../store/actions/EventActions";



function AllEventsScreen({ navigation }) {
const [modalVisible, setModalVisible] = useState(false);
const [eventTitle, setTitle] = useState('');
const [eventSubTitle, setSubTitle] = useState('');
const [eventTime, setTime] = useState('');
const [eventLocation, setLocation] = useState('');
const dispatch = useDispatch();
const events = useSelector(state => state.event.events);
console.log("EVENTS", events)
useEffect(() => {
  dispatch(fetchEvents())
}, []);

  return (
    <View>
      <View style={styles.top}>
        <Title>Events</Title>
        <Ionicons name="add-circle-outline" size={28} color={colors.primary} onPress={() => setModalVisible(true)}></Ionicons>
      </View>
      <SectionList
      sections={[
        {data: EVENTS, 
          keyExtractor: event => event.id.toString(),
          renderItem: ({ item }) => (<EventCard
              image={item.image}
              title={item.eventTitle}
              subTitle={item.eventSubTitle}
              date={item.eventTime}
              location={item.eventLocation}
              onPress={() => navigation.navigate('View Event Discover', { event: item })}/>)
          },
          {data: events, 
            keyExtractor: event => event.id.toString(),
            renderItem: ({ item }) => (<EventCard
                image={item.image}
                title={item.eventTitle}
                subTitle={item.eventSubTitle}
                date={item.eventTime}
                location={item.eventLocation}
                onPress={() => navigation.navigate('View Event Discover', { event: item })}/>)
            },
      ]}/>
      {/* <FlatList
      data={events}
      // keyExtractor={event => event.id.toString()}
      renderItem={({ item }) => (<EventCard
        image={require('../assets/poker.png')}
        title={item.eventTitle}
        subTitle={item.eventSubTitle}
        date={item.eventTime}
        location={item.eventLocation}
        onPress={() => navigation.navigate('View Event Discover', { event: item })}
        />)} 
      /> */}
      {/* <FlatList
      data={EVENTS}
      // keyExtractor={event => event.id.toString()}
      renderItem={({ item }) => (<EventCard
        image={item.image}
        title={item.title}
        subTitle={item.subTitle}
        date={item.date}
        location={item.location}
        onPress={() => navigation.navigate('View Event Discover', { event: item })}
        />)} 
      /> */}
      <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.inputContainer}>
                <Title>Create an event</Title>
                <Input placeholder="Name of event"
                            onChangeText={setTitle}
                            value={eventTitle}
                            // keyExtractor={item => item.name}
                            autoCorrect={false}
                            // icon="search"
                            />
                <Input placeholder="What?"
                      onChangeText={setSubTitle}
                      value={eventSubTitle}
                      autoCorrect={false}/>
                <Input placeholder="Where?"
                      onChangeText={setLocation}
                      value={eventLocation}
                      autoCorrect={false}/>
                <Input placeholder="When?"
                      onChangeText={setTime}
                      value={eventTime}
                      autoCorrect={false}/>
                <View style={styles.modalButtons}>
                  <MainButton
                    style={styles.createButton}
                    title="Create"
                    onPress={() => {dispatch(createEvent(eventTitle, eventSubTitle, eventTime, eventLocation)); setModalVisible(!modalVisible);}}/>
                  <MainButton
                    style={styles.closeModalButton}
                    title="Cancel"
                    color="primary"
                    onPress={() => setModalVisible(!modalVisible)}/>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
      flexDirection:'row',
      paddingHorizontal: 20,
      paddingVertical: 12,
      justifyContent: 'space-between',
      backgroundColor: colors.white
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer:{
    width: '80%',
    marginTop: 20
},
modalView: {
  backgroundColor: "white",
  borderRadius: 20,
  width: '90%',
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  },
  modalButtons:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10
},
createButton: {
  width: 130
},
closeModalButton: {
  width: 130,
  backgroundColor: colors.white,
  borderWidth: 1.5,
  borderColor: colors.primary,
},
})
export default AllEventsScreen;