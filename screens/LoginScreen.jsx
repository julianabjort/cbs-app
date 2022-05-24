import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, restoreUser } from './../store/actions/UserActions';
import { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';

import colors from '../config/colors';
import MainButton from '../components/MainButton';
import ErrorMessage from '../components/ErrorMessage';

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const errorMessage = useSelector(state => state.user.errorMessage);
    
    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        // console.log(tokenFromSecureStore)
        if (emailFromSecureStore && tokenFromSecureStore) {
            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));
        } else {
            // console.log("user logged out");
        }
    }

    useEffect(() => {
        load(); // uncomment to read from secure store
    }, [])

    return (
        <View style={{ backgroundColor: "white" }}>
        
        <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        
        <Text style={styles.title}>Log in to your account</Text>

        { errorMessage === 'EMAIL_NOT_FOUND' ? 
            <ErrorMessage error={'Email not found'}/>
            : errorMessage === 'INVALID_PASSWORD' ?
            <ErrorMessage error={'Wrong password'}/>
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
        
        <Text
            style={[styles.signUpInput, styles.forgotPassword]} >
                Forgot Password?
            </Text>
        
        <View style={styles.buttonContainer}>
            <MainButton 
                title="Log in"
                onPress={() => dispatch(login(email, password))}
            />
        </View>

        <Text style={styles.signupText}>Don't have an account?   
       
        <Text 
            onPress={() => navigation.navigate('Signup')}
            style={styles.signupButtonText}> Sign up</Text> 
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
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "lightgrey",
        width: '100%'
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
        width: '100%',
        marginLeft: 10,
        paddingVertical: 20,
        color: colors.dark
    },
    signupButtonText: {
        color: colors.primary,
        fontWeight: "bold"
    },
    signupText: {
        textAlign: "center",
        color: colors.primary,
    },
    forgotPassword: {
        textAlign: "center",
        color: colors.primary,
        fontWeight: "bold"
    },
});
    
export default LoginScreen;

