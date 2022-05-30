import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from '../components/Title';
import MainButton from '../components/MainButton'
import colors from '../config/colors';


function OrganisationScreen({ route }) {
  const { event } = route.params;
  return(
    <View>
      <Image source={ event.image } style={styles.image}/>
      <View style={styles.background}>
        <View style={styles.title}>
          <Title>{ event.title }</Title>
        </View>
        <View style={styles.buttons}>
          <MainButton
                icon="checkmark"
                title="Following"
                color="primary"
                style={styles.button}
                />
          <MainButton
                icon="chatbubbles-sharp"
                title="Contact"
                color="primary"
                style={styles.button}
                />
        </View>
      <View style={styles.navView}>
        <View style={styles.nav}>
        <Text style={styles.navBtn}>Feed</Text>
        </View>
        <Text style={styles.navBtn}>About</Text>
        <Text style={styles.navBtn}>Events</Text>
        <Text style={styles.navBtn}>Collections</Text>
      </View>
      </View>
      <View style={styles.profile}>
        <Image style={styles.profileImg} source={ event.image }/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  image:{
    width: '100%',
    height: 150
  },
  background: {
    backgroundColor: colors.white
  },
  profile:{
    position: 'absolute', top: 100, left: 140, 
    backgroundColor: 'red', width: 95, height: 95, borderRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
  },
  profileImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },
  title: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  button: {
    flex: 2,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    flexDirection: 'row',
    paddingVertical: 5,
    margin: 10,
},
navView: {
  flexDirection: 'row',
  marginHorizontal: 12,
},
nav: {
  borderBottomColor: colors.primary,
  borderBottomWidth: 2,
},
navBtn: {
  fontSize: 16,
  marginHorizontal: 15,
  fontWeight: '700',
  color: colors.medium,
  marginBottom: 5,
}

})

export default OrganisationScreen;