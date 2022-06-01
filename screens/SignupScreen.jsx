import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { restoreUser, signup } from './../store/actions/UserActions';
import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';

import colors from '../config/colors';
import MainButton from '../components/MainButton';
import ErrorMessage from '../components/ErrorMessage';

const SignupScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errorMessage = useSelector(state => state.user.errorMessage);

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        
        if (emailFromSecureStore && tokenFromSecureStore) {

            console.log("success", emailFromSecureStore);
            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

        } else {
            console.log("user logged out");
        }
    }

    useEffect(() => {
        load(); // uncomment to read from secure store
    }, [])
    
    return (
        <View style={{ backgroundColor: "white"}}>

            <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={styles.title}>Create your account</Text>

            { errorMessage === 'EMAIL_EXISTS' ? 
            <ErrorMessage error={'Email already exists'}/>
            : errorMessage === 'INVALID_EMAIL' ?
            <ErrorMessage error={'Invalid email'}/>
            : errorMessage === 'INVALID_PASSWORD' ?
            <ErrorMessage error={'Invalid password'}/>
            : null
            } 

            <View style={[styles.inputContainer, styles.shadowProp]}>

            <TextInput 
                style={styles.signUpInput} 
                placeholder="Email"
                placeholderTextColor={colors.medium}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={setEmail}
                value={email}
                autoCapitalize = 'none'
                autoCorrect={false}
                />

            <TextInput 
                style={styles.signUpInput} 
                placeholder="Password"
                placeholderTextColor={colors.medium}
                onChangeText={setPassword}
                value={password}
                autoCapitalize = 'none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                 />
          
            </View>
            
            <Text style={styles.signUpInput} >
                I agree to the terms and conditions
            </Text>

            <View style={styles.buttonContainer}>
                <MainButton 
                    title="Sign up"
                    onPress={() => {dispatch(signup(email, password))}}
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
        alignItems: 'center',
        
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