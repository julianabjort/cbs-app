import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react'

import colors from '../config/colors';

const InputEdit = props => {
    const [text, setText] = useState(props.inputValue)
    const [entered, setEntered] = useState(false);

    const handleChangeText = (text) => {
        setEntered(true);
        setText(text);
        if (text === '') {
            props.setValid(false);
        } else {
            props.setValid(true);
        }
    }
    const handleOnBlur = () => {
        setEntered(true);
    }

    return (
        <View style={[styles.container, styles.shadowProp]}>
                
            <TextInput 
                
                value={text} 
                onChangeText={handleChangeText}
                onBlur={handleOnBlur}
                style={styles.textInput}
                autoCorrect={false}
                />
                {!props.valid && entered ? <Text>{props.error}</Text> : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row'
    },
    textInput: {
        marginLeft: 10
    },
    icon:{
        marginRight:10
    },
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
})

export default InputEdit;