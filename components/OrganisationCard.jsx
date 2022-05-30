import { Button, Image, View, Text, TouchableHighlight, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Title from './Title';
import MainButton from './MainButton';
import colors from '../config/colors';


function OrganisationCard({ image, title, text, onPress }) {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.lighter}
      >
        <View>
          <Image style={styles.image}source={image}/>
          <View style={styles.profile}>
          <Image style={styles.profileImg}source={image}/>
          </View>
          <MainButton
            icon="checkmark"
            title="Following"
            color="primary"
            style={styles.button}
            />
          <View>
            <Title style={styles.title}>{title}</Title>
            <Text style={styles.text}>{text}</Text>
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
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  profile:{
    position: 'absolute', top: 70, left: 20, 
    backgroundColor: 'red', width: 95, height: 95, borderRadius: 2,
    shadowColor: "black",
    shadowOffset: { height: 2},
    shadowOpacity: 0.3,
  },
  button: {
    position: "absolute",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    flexDirection: 'row',
    right: 20,
    top: 130,
    paddingVertical: 5,
    marginTop: 4,
    width: "40%"
},
  profileImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },

  title: {
    paddingTop: 55,
    paddingHorizontal: 15,
  },
  text: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  shadowProp: {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8
},
})
export default OrganisationCard;