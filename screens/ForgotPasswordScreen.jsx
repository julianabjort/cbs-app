import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import Title from '../components/Title';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import colors from '../config/colors';
import { resetPassword } from '../store/actions/UserActions';
import ErrorMessage from '../components/ErrorMessage';

const ForgotPasswordScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const errorMessage = useSelector(state => state.user.errorMessage);
    
   return (
      <View style={styles.container}>
          <Title>Reset Password</Title>
          <Text style={styles.text}>If you do not know your current password you can change it.</Text>

          { errorMessage === 'EMAIL_NOT_FOUND' ? 
            <ErrorMessage error={'Email not found'}/>
            : null
            } 

            <Text style={styles.label}>E-mail</Text>
          <Input
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                placeholder="email@student.cbs.dk"
                placeholderTextColor={colors.medium}
                autoCapitalize = 'none'
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                />
            <MainButton
            style={styles.button}
            title="Reset"
            onPress={() => {dispatch(resetPassword(email)); navigation.navigate('New Password')}}
            
            
            />
        
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
    marginTop: 120,
    marginHorizontal: 15
   },
   text: {
       marginBottom: 38,
       fontSize: 16,
   },
   input: {
       paddingVertical: 2,
   },
   label: {
       marginLeft: 12,
       fontWeight: '800',
       fontSize: 12,
       color: colors.secondary,
       textTransform: 'uppercase'
   },
   button: {
       marginTop: 16
   }
})

export default ForgotPasswordScreen;