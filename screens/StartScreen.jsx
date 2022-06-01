import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

import Title from '../components/Title';
import MainButton from '../components/MainButton';
import Input from '../components/Input';
import colors from '../config/colors';
import { addUserInfo } from '../store/actions/UserActions';

function StartScreen({ navigation }) {
const dropDownTheme = require("../components/DropDown");
DropDownPicker.addTheme("ExtraLight", dropDownTheme);
DropDownPicker.setTheme("ExtraLight");

const [username, setUsername] = useState('');
const [programme, setProgramme] = useState('');
const dispatch = useDispatch();
const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'International Business', value: 'International Business'},
    {label: 'International Shipping and Trade', value: 'International Shipping and Trade'},
    {label: 'International Business in Asia', value: ' International Business in Asia'},
    {label: 'Business, Language and Culture', value: ' Business, Language and Culture'},
    {label: 'International Business and Politics', value: 'International Business and Politics'},
    {label: 'Business Administration and Sociology', value: 'Business Administration and Sociology'},
]);

   return (
      
           <View style={styles.container}>

             

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
                placeholderTextColor={colors.medium}
            />
            <Text style={styles.text}>Choose your study programme</Text>
            
            <DropDownPicker
                placeholder="Select"
                open={open}
                value={programme}
                items={items}
                setOpen={setOpen}
                setValue={setProgramme}
                setItems={setItems}
                placeholderStyle={{
                    color: colors.medium}}
                searchable={true}
    />
           
            <MainButton 
                    title="Save Changes"
                    style={styles.continueButton}
                    onPress={() => {dispatch(addUserInfo(username, programme)); navigation.navigate("View Profile")}}
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