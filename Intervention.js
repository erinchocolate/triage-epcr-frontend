
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DropDown from './DropDown';

  export default function Intervention() { 

        return (

          <View style={styles.container}>
          <View style={styles.smallDropdown}> 
           <DropDown
            placeholder = 'Size'
            items = {[
              {label: '0', value: '0'},
              {label: '00', value: '00'},
              {label: '000', value: '000'},
              {label: '1', value: '1'},
              {label: '2', value: '2'},
              {label: '3', value: '3'},
              {label: '4', value: '4'},
              {label: '5', value: '5'},
              {label: '6', value: '6'},
              {label: '7', value: '7'},
              {label: '8', value: '8'},
              {label: '9', value: '9'}
            ]}
           />
           </View>


          <View style={styles.largeDropdown}> 
          <DropDown
            placeholder = 'Location'
            items = {[
              {label: 'Nasal', value: 'Nasal'},
              {label: 'Oral', value: 'Oral'},
              
            ]}
           />
          </View>



          
          </View>




        );
    
  }

  const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#4BAFEB',
        alignItems: 'center',
        justifyContent: 'center',
    
    },


    
    smallDropdown: {
      width: '40%'
    },
  
    largeDropdown: {
      width: '60%'
    },


    });


