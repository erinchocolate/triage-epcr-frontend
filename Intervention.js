
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import DropDown from './DropDown';
import React from 'react';
import CheckBox from './Checkbox';


export default function Intervention() { 

    //this is used for the state of the keypad
    const [text, onChangeText] = useState('');

 return (

  //main box that everything fits into
  <View style={styles.component}>  

  
    <View style={styles.container}>

        <CheckBox/>
        <Text>OPA</Text>

        <CheckBox/>
        <Text>LMA</Text>

        <CheckBox/>
        <Text>NPA</Text>

        <CheckBox/>
        <Text>ETT</Text>

    </View>


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


    <View style={styles.container}>

          <CheckBox/>
          <Text>PEEP</Text>

          <CheckBox/>
          <Text>Suction</Text>

          <CheckBox/>
          <Text>BVM</Text>

    </View>


    <View style={styles.container}>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Bring up a keypad"
          />

      <View style={styles.largeDropdown}> 
          <DropDown
              placeholder = 'Suction Catheter'
              items = {[
              {label: 'Opt 1', value: 'Opt 1'},
              {label: 'Opt 2', value: 'Opt 2'},
      
              ]}
            />
        </View>

    </View>

    <View style={styles.container}>

          <CheckBox/>
          <Text>IO</Text>

            <CheckBox/>
            <Text>IV</Text>

    </View>



    <View style={styles.container}>

      <View style={styles.smallDropdown}> 
           <DropDown
            placeholder = 'Size'
            items = {[
              {label: '0', value: '0'},
              {label: '00', value: '00'},
              {label: '000', value: '000'},
            
            ]}
           />
      </View>


      <View style={styles.largeDropdown}> 
          <DropDown
            placeholder = 'Location'
            items = {[
              {label: 'Opt 1', value: 'Opt 1'},
              {label: 'Opt 2', value: 'Opt 2'},
              
            ]}
           />
       </View>

          <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Add</Text>
          </TouchableOpacity>     

    </View>

    


</View>


    );
    
  }

  const styles = StyleSheet.create({
    component: {
      backgroundColor: "dodgerblue",
      flex:1,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    
    
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },


  
    smallDropdown: {
      width: '20%'
      

    },
  
    largeDropdown: {
      width: '40%'
    },

    button: {
      backgroundColor: "#EBEBEB",
      borderRadius: 10,
      width: 70,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
 
    },

    input: {
      height: 40,
      width:'40%',
      borderWidth: 1,
      backgroundColor: "white",
      margin: 12,
      padding: 10,
      
    },


    });


