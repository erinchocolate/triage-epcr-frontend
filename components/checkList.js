import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import React from 'react';
import CheckBox from '../utility/Checkbox';

export default function CheckList({checkLists, setCheckLists}) { 

  //CheckBox Data holders
  const [opt1, setOpt1] = useState(checkLists.opt || false);
  const [opt2, setOpt2] = useState(checkLists.opt || false);
  const [opt3, setOpt3] = useState(checkLists.opt || false);
  const [opt4, setOpt4] = useState(checkLists.opt || false);
  const [opt5, setOpt5] = useState(checkLists.opt || false);
  const [opt6, setOpt6] = useState(checkLists.opt || false);
  const [opt7, setOpt7] = useState(checkLists.opt || false);
  const [opt8, setOpt8] = useState(checkLists.opt || false);
  const [opt9, setOpt9] = useState(checkLists.opt || false);

 return (

<View style={styles.layout}>
        <View style = {styles.column}>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Check List 1 </Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt1}
                    setChecked={opt1=>{
                    setOpt1(opt1);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt1: opt1}))}}/>
                <Text>OPTION 1</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt2}
                    setChecked={opt2=>{
                    setOpt2(opt2);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt2: opt2}))}}/>
                <Text>OPTION 2</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt3}
                    setChecked={opt3=>{
                    setOpt3(opt3);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt3: opt3}))}}/>
                <Text>OPTION 3</Text>
                </View>                
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Check List 2 </Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt4}
                    setChecked={opt4=>{
                    setOpt4(opt4);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt4: opt4}))}}/>
                <Text>OPTION 4</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt5}
                    setChecked={opt5=>{
                    setOpt5(opt5);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt5: opt5}))}}/>
                <Text>OPTION 5</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt6}
                    setChecked={opt6=>{
                    setOpt6(opt6);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt6: opt6}))}}/>
                <Text>OPTION 6</Text>
                </View>                
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Check List 3 </Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt7}
                    setChecked={opt7=>{
                    setOpt7(opt7);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt7: opt7}))}}/>
                <Text>OPTION 7</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt8}
                    setChecked={opt8=>{
                    setOpt8(opt8);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt8: opt8}))}}/>
                <Text>OPTION 8</Text>
                </View>
                <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={opt9}
                    setChecked={opt9=>{
                    setOpt9(opt9);
                    setCheckLists(prevCheckLists=>({...prevCheckLists, opt9: opt9}))}}/>
                <Text>OPTION 9</Text>
                </View>                
            </View>

        </View>
</View>
             
 );  
}

const commonStyle = {
    borderColor: '#4A96C9',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '58%',
        width: '100%',
        backgroundColor: '#4A96C9',  
    },
    column:{
        height: '90%',
        width: '35%'
    },
    row:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
    },
    title:{
        ...commonStyle
    },
    checkboxGroup:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: '4%'
    },
})