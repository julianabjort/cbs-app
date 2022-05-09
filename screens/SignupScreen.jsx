import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, Text, Image, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from './../store/actions/UserActions';
import { useState } from 'react'
import * as SecureStore from 'expo-secure-store';

import colors from '../config/colors';
import MainButton from '../components/MainButton';

const SignupScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const e = useSelector(state => state.user.email);
    const idToken = useSelector(state => state.user.idToken);

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email')
        let tokenFromSecureStore = await SecureStore.getItemAsync('idToken')
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);
            dispatch()
        }
        else 
            console.log("failure")
    }
    
    return (
        <View style={{ backgroundColor: "white"}}>

            <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={styles.title}>Create your account</Text>

            <View style={[styles.inputContainer, styles.shadowProp]}>
            <TextInput 
                style={styles.signUpInput} 
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                autoCapitalize = 'none'
                autoCorrect={false}
                />

            <TextInput 
                style={styles.signUpInput} 
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                autoCapitalize = 'none'
                autoCorrect={false}
                secureTextEntry={true}
                 />
            
            <TextInput 
                style={styles.signUpInput} 
                placeholder="Repeat Password"
                 />
            </View>
            
            <Text style={styles.signUpInput} >
                I agree to the terms and conditions
            </Text>

            <View style={styles.buttonContainer}>
                <MainButton 
                    title="Sign up"
                    onPress={() => dispatch(signup(email, password))}
                />
            </View>

            <Text style={styles.loginText}>Already have an account?   
            <Text 
                onPress={() => navigation.navigate('Login')}
                style={styles.loginButtonText}> Log in </Text> 
            </Text> 
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginVertical: 10,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "lightgrey",
        borderRadius: 10,
    },
    buttonContainer: {
        width: '100%'
    },
    shadowProp: {
        shadowColor: 'grey',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    signUpInput: {
        marginLeft: 10,
        paddingVertical: 20,
        
    },
    loginButtonText: {
        paddingTop: 50,
        paddingLeft: 8,
        color: colors.primary,
        fontWeight: "bold"
    },
    loginText: {
        textAlign: "center",
        color: colors.primary,
    }
    
    });

export default SignupScreen;