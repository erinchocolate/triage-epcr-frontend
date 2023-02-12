import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Homepage() {

    return (
      <View style={styles.container}>

    <TouchableOpacity style={styles.squareButton}>
    <Text style={{textAlign: 'center'}}>Patient Connect</Text>
    </TouchableOpacity>

    <View style={styles.space} />


    <TouchableOpacity onPress={()=>changeView('incident')} style={styles.squareButton}>
    <Text style={{textAlign: 'center'}}>Electronic Patient Care Record</Text>
    </TouchableOpacity>

        </View>
     
    )
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '130%',
        height: '130%',
        backgroundColor: '#4A96C9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
     
    },
    space: {
        width: 260, // or whatever size you need
        height: 20,
      },

      squareButton: {
        width: 200,
        height:200,
        backgroundColor: '#00FF00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10
      },


  });