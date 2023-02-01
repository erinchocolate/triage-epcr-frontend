import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';
import React from 'react';
import CheckBox from '../utility/Checkbox';
import IvPage from './IvPage';


export default function Intervention() { 

    //this is used for the state of the keypad
    const [text, onChangeText] = useState('');

 return (
<View style={styles.layout}>
  
  <View style={styles.component}>  
    <View style={styles.container}>

        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>OPA</Text>
        </View>
        
        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>LMA</Text>
        </View>

        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>NPA</Text>
        </View>

        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>ETT</Text>
        </View>

    </View>


    <View style={[styles.container, { zIndex: 4}]}>
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
      <View style={styles.secRow}>

          <View style={styles.checkboxGroup}>
          <CheckBox/>
          <Text>PEEP</Text>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Bring up a keypad"
          />

      </View>
    </View>


    <View style={styles.container}>
    <View style={styles.secRow}>

        <View style={styles.checkboxGroup}>
          <CheckBox/>
          <Text>Suction</Text>
          </View>

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
    </View>


    <View style={styles.container}>   
    <View style={styles.secRow}>
      <View style={styles.checkboxGroup}>
          <CheckBox/>
          <Text>BVM</Text>
      </View>
    </View>
    </View>


  </View>



<View style={styles.component}>
    <IvPage/>
    <View style={styles.bottomRow}>
            <TouchableOpacity style = {styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
</View>


</View>

    );
    
  }

  const commonStyle = {
    borderColor: '#3b3b3b',
    borderWidth: 1,
    width: '30%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white'
}

  const styles = StyleSheet.create({
    layout: {
      
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      height: '58%',
      width: '100%',
      backgroundColor: "dodgerblue",
    },

    component: {
      backgroundColor: '#9dc8e2',  
      flex:1,
      flexDirection: "column",
      height: '90%',
      width: '90%',
      
    
    },    
    bottomRow:{
      ...commonStyle,
      flexDirection: 'row',
      width: '80%',
      height: '15%',
      marginTop: 'auto',
      backgroundColor: '#93ff33',
      marginLeft: 'auto'  
  },
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      margin:4
    
    },


    smallDropdown: {
      width: '40%',
      height:50,
      
  
    },
  
    largeDropdown: {
      width: '50%',
      zIndex: 1000,
      elevation:1000,
      height:50,
    },

   

    input: {
      height: 50,
      width:'50%',
      borderWidth: 1,
      backgroundColor: "white",
      margin: 12,
      padding: 10,
      
    },

    checkboxGroup:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: '4%'
  },

  secRow:{
    marginLeft:80,
    marginTop: '3%',
    flexDirection: "row",
    width:'100%'
  },


    });

