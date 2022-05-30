import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
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
                
                <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('All Events Screen')}>
                    <View style={[styles.shadowProp, styles.card]}>
                    <Text style={styles.title}>All Events</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('All Organisations Screen')}>
                    <View style={[styles.shadowProp, styles.card]}>
                    <Text style={styles.title}>All Organizations</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate()}>
                    <View style={[styles.shadowProp, styles.card]}>
                    <Text style={styles.title}>All Posts</Text>
                    </View>
                </TouchableOpacity>
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
        shadowRadius: 8,
    },
    input: {
        
    },
    card: {
        marginVertical: 10,
        backgroundColor: "purple",
        borderRadius: 15,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 140,
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