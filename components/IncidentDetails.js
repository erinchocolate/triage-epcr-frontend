import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import DropDown from '../utility/DropDown';

export default function IncidentDetails() {
     
    return (
    <View style={styles.layout}>
        <Text>Wow, look! A Dropbox!</Text>
        <View style={styles.dropdown}>
        <DropDown
                placeholder = 'Josh'
                items = {[
                    {label: 'Darina', value: 'D'},
                    {label: 'Harry', value: 'H'},
                    {label: 'Meiqiao', value: 'M'}
                ]} />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '58%',
        width: '40%',
        backgroundColor: 'white'
    }
})