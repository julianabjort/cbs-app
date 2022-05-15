import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/actions/UserActions';
import Title from '../components/Title';
import MainButton from '../components/MainButton';
import { fetchUserInfo } from '../store/actions/UserActions';

const ProfileScreen = ({ navigation }) => {
    const [chatOn, setChatOn] = useState(false);
    const [eventOn, setEventOn] = useState(false);
    const email = useSelector(state => state.user.email);
    const username = useSelector(state => state.user.username);
    const programme = useSelector(state => state.user.programme);
    console.log(programme)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, []);

    return ( 
    <View style={styles.mainContainer}>
        <View style={styles.userInfoContainer}>
            <Image style={styles.profileImg} source={require('../assets/laufey.jpeg')}></Image>
            <View style={styles.userInfo}>
                <Title>{username}</Title>
                <Text>{email}</Text>
                <Text>Project Management</Text>
            </View>
        </View>

        <MainButton 
            style={styles.editButton}
            title="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            
        />
        <View style={styles.notificationsContainer}>
            <Title>Notifications</Title>

            <View style={[styles.element, styles.shadowProp]}>
            <View>
                <Title style={{ fontSize: 16 }}>Chat</Title>
                <Text style={{ color: 'gray' }}>When you receive a message</Text>
            </View>

            <Switch 
                style={styles.switch}
                value={chatOn}
                onValueChange={(newValue) => setChatOn(newValue)}
            />
            </View>

            <View style={[styles.element, styles.shadowProp]}>
            <View>
            <Title style={{ fontSize: 16 }}>Event Reminder</Title>
                <Text style={{ color: 'gray' }}>An hour before</Text>
            </View>

            <Switch 
                style={styles.switch}
                value={eventOn}
                onValueChange={(newValue) => setEventOn(newValue)}
            />
            </View>

            <MainButton
                title="Logout"
                style={styles.logoutButton}
                backgroundColor="white"
                color="primary"
                onPress={() => dispatch(logout())}
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
        flexDirection: 'row',
        backgroundColor: 'white',
        marginVertical: 10,
        paddingLeft: 10,
        height: 80,
        borderRadius: 10,
        alignItems: 'center'
    },
    logoutButton: {
        marginTop: 30
    },
    editButton: {
        marginTop: 20
    },
    switch: {
        position: 'absolute', 
        right: 10 
    }
});

export default ProfileScreen;