import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Title from '../components/Title';
import MainButton from '../components/MainButton';

const NewPasswordScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
          <Title>Check Your Inbox</Title>
          <Text style={styles.text}>We've sent you a verification email. Open it and tap the "Change Password" link to continue.</Text>
          
            <MainButton
            style={styles.button}
            title="Login"
            onPress={() => navigation.navigate('Login')}
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
   
   button: {
       marginTop: 16
   }
})

export default NewPasswordScreen;