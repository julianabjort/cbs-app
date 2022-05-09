import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Title from '../components/Title';
import MainButton from '../components/MainButton';

const MenuScreen = ({ navigation }) => {

    return (
        
    <View style={styles.mainContainer}>
        <View style={styles.userInfoContainer}>
            <Image style={styles.profileImg} source={require('../assets/laufey.jpeg')}></Image>
            <View style={styles.userInfo}>
                <Title>Laufey Hjaltested</Title>
                <Text>laufey@cbs.dk</Text>
                <Text>Project Management</Text>
            </View>
        </View>

        <MainButton 
            style={styles.editButton}
            title="Edit Profile"
        />

        <View style={styles.notificationsContainer}>
            <Title>Notifications</Title>

            <View style={[styles.element, styles.shadowProp]}>
                <Text style={styles.elementText}>Chat</Text>
                <Text style={{ color: 'gray' }}>When you receive a message</Text>
            </View>

            <View style={[styles.element, styles.shadowProp]}>
                <Text style={styles.elementText}>Event Reminder</Text>
                <Text style={{ color: 'gray' }}>An hour before</Text>
            </View>

            <MainButton
                title="Logout"
                style={styles.logoutButton}
                backgroundColor="white"
                color="primary"
            />

        </View>

    </View>
       
    );
}

const styles = StyleSheet.create({
    
    mainContainer: {
        flex: 1,
        padding: 30,
        
    },
    userInfoContainer: {
        flexDirection: 'row',
    },
    userInfo: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    notificationsContainer: {
        marginVertical: 20,
    },
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    element: {
        backgroundColor: 'white',
        marginVertical: 10,
        paddingLeft: 10,
        height: 80,
        borderRadius: 10,
        justifyContent: "center",
    },
    elementText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    logoutButton: {
        marginTop: 30
    },
    editButton: {
        paddingVertical: 10,
        marginTop: 20
    }
});

export default MenuScreen;