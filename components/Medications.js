import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';


export default function Medications() {

    const [medication, setMedication] = useState('');
    const [units, setUnits] = useState('');

  return (
    <View style={styles.layout}>
        <View style={styles.row}>
            <TextInput
                value={medication}
                onChangeText={medication=>setMedication(medication)}
                placeholder={'Start typing...'}
                placeholderTextColor = '#b3b3b3'
                style={styles.wideInput}/>
            <TextInput
                value={units}
                onChangeText={units=>setUnits(units)}
                placeholder={'mg/mcg/mls'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <TouchableOpacity style = {styles.button}>
                <Text>Add Medication</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const commonStyle = {
        borderColor: '#3b3b3b',
        borderWidth: 1,
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
        justifyContent: 'center',
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
    },
    row:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
    },
    title:{
        ...commonStyle,
        width: '30%',
        height: '60%',
    },
    input:{
        ...commonStyle,
        paddingLeft: 10,
        width: '15%',
        height: '60%',

    },
    wideInput:{
        ...commonStyle,
        width: '40%',
        height: '60%',
        paddingLeft: 10,
    },
    button:{
        ...commonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: 'dodgerblue',
    }
})