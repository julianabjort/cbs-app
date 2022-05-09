import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, Button, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './../store/actions/UserActions';
import { useState } from 'react'

import colors from '../config/colors';
import MainButton from '../components/MainButton';

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const e = useSelector(state => state.user.email);
    const idToken = useSelector(state => state.user.idToken);   

    return (
        <View style={{ backgroundColor: "white" }}>
        
        <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        
        <Text style={styles.title}>Log in to your account</Text>

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
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "lightgrey",
        borderRadius: 10,
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

