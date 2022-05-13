import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import { useState } from 'react'

import Title from '../components/Title';
import MainButton from '../components/MainButton';
import InputEdit from '../components/InputEdit';

function EditScreen(){
    const username = useSelector(state => state.user.username);
    console.log(username)
    const [validUsername, setValidUsername] = useState(username !== '')

    const save = () => {
        // ** if the "form" is valid ** {
        // save data - we need access to text here...
        //} else {
        // display error message
        //}
    }

    return (
        <View style={styles.container}>
             <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={require('../assets/laufey.jpeg')}></Image>
                <View style={styles.upload}>
                    <Title>Profile picture</Title>
                    <MainButton 
                    title="Upload"
                    style={styles.uploadButton}
                    />
                </View>
            </View>

            <InputEdit
                label="Username"
                placeholder="username"
                inputValue={username}
                error="Username cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
            />
           <InputEdit label="Hi" inputValue="" error="Cannot be empty" />
            <MainButton 
                    title="Save Changes"
                    style={styles.saveButton}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        margin: 20
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
    saveButton: {
        marginVertical: 20
    }
})

export default EditScreen;