import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import MedicationTextBox from '../utility/MedicationTextBox';

export default function Medications({allMedication, setAllMedication}) {

    const [medication, setMedication] = useState('');
    const [units, setUnits] = useState('');



    const timestamp = new Date().toLocaleString();


   
    function addMedication(){
        setAllMedication(prevAllMedication=>{
            const medicationRowKey = uuid.v4();
            return [...prevAllMedication, {medicationRowId: medicationRowKey, medicationName: medication, medicationAmount: units, medicationTime: timestamp}]
        })
    }

    function deleteMedication(medicationRowId){
        setAllMedication(prevAllMedication=>{
            return (
                prevAllMedication.filter(existingMedication=>existingMedication.medicationRowId != medicationRowId)
            )
        })
        
    }

  return (
    <View style={styles.layout}>
        <View style={[styles.row, { zIndex: 4}]}>
            
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
        <ScrollView style = {styles.scrollbox} >
        {allMedication.length===0? <View><Text>No Medication administered yet</Text></View> : <></>}
        {allMedication.map(singleMedication=>{
                    return(
                        <View key={singleMedication.medicationRowId} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%', marginLeft: 40}}>
                             <MedicationTextBox
                                    time={singleMedication.medicationTime}
                                    setAllMedication={setAllMedication}
                                    medicationRowId={singleMedication.medicationRowId}/> 
                            <View style={styles.medicationBox}><Text  style={styles.medicationText}>{singleMedication.medicationName} {singleMedication.medicationAmount}</Text></View>
                            <TouchableOpacity style={styles.deleteButton} onPress={()=>deleteMedication(singleMedication.medicationRowId)} ><Text>X</Text></TouchableOpacity>
                        </View>
                    )
                })}
        </ScrollView>
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
        height: Dimensions.get('window').height * 0.58,
        width: '100%',
        backgroundColor: '#4A96C9',  

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
 
    medicationText:{
        fontSize: 30

    },
    deleteButton:{
        ...commonStyle,
        width: '5%',
        height: '60%',
        backgroundColor: '#FF5C5C'
    },
   
    medicationBox:{
        ...commonStyle,
        width: '50%'
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
    },

    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
      }
})