import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useState, useEffect } from 'react'

import Title from '../components/Title';
import MainButton from '../components/MainButton';
import Input from '../components/Input';
import colors from '../config/colors';
import { addUserInfo } from '../store/actions/UserActions';

function StartScreen(props) {

const [username, setUsername] = useState('');
const [programme, setProgramme] = useState('');
const dispatch = useDispatch();


   return (
      
           <View style={styles.container}>
            
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            </View>

            <Title>Before we start..</Title>  

             <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={require('../assets/laufey.jpeg')}></Image>
                <View style={styles.upload}>
                    <Text style={styles.text}>Profile picture</Text>
                    <MainButton 
                    title="Upload"
                    style={styles.uploadButton}
                    />
                </View>
            </View>

            <Text style={styles.text}>What's your name?</Text>
            <Input
                onChangeText={setUsername}
                label="Username"
                value={username}
                placeholder="Full Name"
            />
            <Text style={styles.text}>Choose your study programme</Text>
            <Input
                onChangeText={setProgramme}
                label="Programme"
                value={programme}
                placeholder="Study Programme"
            />
           
            <MainButton 
                    title="Continue"
                    style={styles.continueButton}
                    onPress={() => {dispatch(addUserInfo(username, programme))}}
                    />
        </View>
      
   );
}

const styles = StyleSheet.create({
    container: { 
        padding: 20,
        backgroundColor: colors.white,
        flex: 1
    },
    text: {
        paddingLeft: 12
    },
    profileImgContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    upload: {
        paddingTop: 20,
        paddingLeft: 20,
        width: '70%',
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    uploadButton: {
        marginTop: 10
    },
    continueButton: {
        marginTop: 40
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        alignItems: 'center'
    }
})

export default StartScreen;