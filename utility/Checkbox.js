import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function CheckBox({isChecked, setChecked}) { 

    return(
    <View style={styles.container}>
         <Checkbox 
            style={styles.checkbox}
            color={isChecked? "#00FF00": undefined}
            value={isChecked} 
            onValueChange={setChecked} 
         />
    </View>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        margin: 8,
        backgroundColor: '#fff'
    },
  });