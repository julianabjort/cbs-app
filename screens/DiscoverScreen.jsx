import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';

const DiscoverScreen = ({ navigation }) => {

    return (
        <View>
                <Input
                style={styles.shadowProp}
                placeholder="Search for events, posts and more"
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
    
    searchInput: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 18,
        paddingLeft: 10,
        margin: 20,
        flexDirection: 'row'
    },
    searchInputText: {
        marginLeft: 10
    },
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 16,
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        
    },
    title: { 
        position: 'absolute',
        fontSize: 18, 
        color: 'white', 
        fontWeight: 'bold'
    },
    
});

export default DiscoverScreen;