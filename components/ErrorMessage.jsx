import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { errorMessages } from '../entities/ErrorMessages'
import colors from '../config/colors';


function ErrorMessage({error}) {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{error}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginBottom: 10
   },
   text: {
      color: colors.red,
      fontWeight: '600'
   }
})

export default ErrorMessage;