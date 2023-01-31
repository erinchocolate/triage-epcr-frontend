import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import CheckBox from '../utility/Checkbox';

export default function Procedures() {
     
    return (
    <View style={styles.layout}>
        
        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Cardioversion</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Pacing</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Cardiac Arrest</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Checklists</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>RSI</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Mechanical Ventilation</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>CPAP</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Surgical CRIC</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Cardiac Arrest Data Form</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Needle Decompression</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>Finger Thoracostomy</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>RSI Data Form</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox/>
                <Text style={styles.myText}>FI Block</Text>
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const buttonStyle = {
    borderColor: '#3b3b3b',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    marginLeft: 'auto'
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: '20%',
    },
    checkboxGroup:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: '4%'
    },
    myText:{
        fontSize: 20,
    },
    button:{
        ...buttonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: 'dodgerblue',
    },
    saveButton:{
        ...buttonStyle,
        width: '30%',
        height: '60%',
        backgroundColor: '#93ff33'
    }
})