import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

const DiscoverScreen = ({ navigation }) => {

    return (
        <View>
                <View style={[styles.searchInput, styles.shadowProp]}>
                    <TextInput 
                        style={styles.searchInputText} 
                        placeholder="Search for events, posts and more"
                        />
                </View>

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
        paddingVertical: 20,
        margin: 20,
    },
    searchInputText: {
        marginLeft: 20
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
        marginVertical: 10,
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