import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import colors from '../config/colors';

function EventScreen({ route }) {
const { event } = route.params;

   return (
    <View style={styles.container}>
        <Image source={ event.eventImage } style={styles.image}/>
        <View style={styles.content}>
          <Title style={styles.title}>{ event.eventTitle }</Title>

          <View style={styles.row}>
            <Ionicons name="time" size={16} color="black" />
            <Text style={styles.text}>{ event.eventTime }</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="location-sharp" size={16} color="black" />
            <Text style={styles.text}>{ event.eventLocation }</Text>
          </View>
          
        <View style={[styles.row, styles.studOrgContainer]}>
            <Image style={styles.iconImage} source={require('../assets/logo.png')}/>
            <View>
                <Text style={styles.studOrgTitle}>{ event.eventSubTitle }</Text>
                <Text style={{ color: colors.light }}>View Page</Text>
            </View>

            <View style={styles.chatButton}>
                <Ionicons name="chatbubbles" size={24} color="white" />
            </View>
        </View>

        <View style={styles.buttonContainer}>
            <MainButton
            icon="star-outline"
            title="Interested"
            color="primary"
            style={styles.buttons}
            />
            <MainButton
            icon="checkbox-outline"
            title="Going"
            color="primary"
            style={styles.buttons}
            />
        </View>

        <View style={styles.bottomContainer}>
            <View style={[styles.row, styles.bottom]}>
                <Ionicons name="star" size={20} color="black" />
                <Text style={{ fontWeight: '600' }}> 145 Interested</Text>
            </View>
            <View style={[styles.row, styles.bottom]}>
                <Ionicons name="checkbox-outline" size={20} color="black" />
                <Text style={{ fontWeight: '600' }}> 36 Going</Text>
            </View>
        </View>
      </View>
    </View>
   );
}

const styles = StyleSheet.create({

   container: {
        flex: 1,
        backgroundColor: colors.white
   },
   content: {
        margin: 15
   },
   image:{
        width: '100%',
        height: 250
   },
   title: {
        fontSize: 20,
        marginBottom: 10
   },
   text: {
        marginVertical: 5,
        marginLeft: 12,
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconImage: {
        width: 40,
        height: 40,
        borderRadius: 35,
        marginRight: 10
    },
    studOrgContainer: {
        borderWidth: 0.5,
        borderColor: colors.light,
        borderRadius: 12,
        marginVertical: 20,
        padding: 10,
    },
    studOrgTitle: {
        fontWeight: '600',
        fontSize: 16
    },
    chatButton:{
        width: 40,
        height: 40,
        backgroundColor: colors.primary,
        borderRadius: 6,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    buttons: {
        width: 170,
        backgroundColor: colors.white,
        borderWidth: 1.5,
        borderColor: colors.primary
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        
        
    }, 
    bottom: {
        width: '40%',
        justifyContent: 'center',
        
    }
})

export default EventScreen;