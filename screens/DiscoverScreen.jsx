import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import colors from '../config/colors';

const DiscoverScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
                <Input
                style={[styles.shadowProp, styles.input]}
                placeholder="Search for events, posts and more"
                placeholderTextColor={colors.medium}
                icon="search"
                />
                
                <View style={[styles.card, styles.shadowProp]}>
                <Image style={styles.image} source={require('../assets/event.png')}/>
                    <Text style={styles.title}>All Events</Text>
                </View>

                <View style={[styles.card, styles.shadowProp]}>
                <Image style={styles.image} source={require('../assets/event.png')}/>
                    <Text style={styles.title}>All Organizations</Text>
                </View>

                <View style={[styles.card, styles.shadowProp]}>
                <Image style={styles.image} source={require('../assets/event.png')}/>
                    <Text style={styles.title}>All Posts</Text>
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 8
    },
    input: {

    },
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 15,
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    title: { 
        position: 'absolute',
        fontSize: 18, 
        color: 'white', 
        fontWeight: 'bold'
    },
});

export default DiscoverScreen;