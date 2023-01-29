import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';


export default function Medications() {

    const [medication, setMedication] = useState('');
    const [units, setUnits] = useState('');
    const [allMedication, setAllMedication] = useState([]);

    function addMedication(){
        setAllMedication(prevAllMedication=>{
            console.log(allMedication)
            return [...prevAllMedication, {medicationName: medication, medicationAmount: units}]
        })
    }

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
                <TouchableOpacity onPress={()=>addMedication()} style = {styles.button}>
                    <Text >Add Medication</Text>
                </TouchableOpacity>
            </View>
        <View style={styles.scrollcontent}>
        <ScrollView style = {styles.scrollbox}>
        {allMedication.map(singleMedication=>{
                    return(
                        <View key={uuid.v4()} style={styles.medicationBox}><Text  style={styles.medication}>{singleMedication.medicationName} {singleMedication.medicationAmount}</Text></View>
                    )
                })}
        </ScrollView>
        </View>
        
        <View style={styles.bottomRow}>
            <TouchableOpacity style = {styles.saveButton}>
                <Text>Save</Text>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
        flex: 1,

    },
    scrollcontent:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        
    },
    scrollbox:{
        flex: 1
        
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '25%',
    },
    bottomRow:{
        flexDirection: 'row',
        width: '90%',
        height: '15%',
        marginTop: 'auto'  
    },
    medicationBox:{
        ...commonStyle,
        width: '90%'
    },
    medication:{
        fontSize: '30%'
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
    },
    saveButton:{
        ...commonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: '#93ff33',
        marginLeft: 'auto'
    }
})