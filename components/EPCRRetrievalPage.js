import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-native-uuid';
import RetrievalFooter from './RetrievalFooter';

export default function EPCRRetrievalPage() {


    const [allEPCRRecords, setAllEPCRRecords] = useState([]);

    async function retrieveFromDatabase(){
        console.log('Retrieving...');
        axios.get('http://10.140.34.240:3000/epcrs/')
        .then( function(response){
          console.log(response.data);
          setAllEPCRRecords(response.data);
        })
      }
    
  return (
    <>
    <View style={styles.layout}>

            <TouchableOpacity onPress={()=>{retrieveFromDatabase()}} style={styles.retrieveButton}>
                <Text style={styles.medicationText}>Retrieve Data!</Text>
            </TouchableOpacity>

        <View style={styles.scrollcontent}>
        <ScrollView style = {styles.scrollbox} >
        {allEPCRRecords.length===0? <View><Text>No EPCR Records Avaialble</Text></View> : <></>}
        {allEPCRRecords.map(singleRecord=>{
                    return(
                        <TouchableOpacity key={uuid.v4()} style={styles.medicationBox}>
                            <Text style={styles.medicationText}>{singleRecord.first_name} {singleRecord.last_name}</Text>
                        </TouchableOpacity>
                    )
                })}
        </ScrollView>
        </View>
    </View>
    <RetrievalFooter></RetrievalFooter>
    </>
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
        height: '88%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
        paddingTop: 20

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
        width: '90%'
    },
    retrieveButton:{
        ...commonStyle,
        width: '90%',
        backgroundColor: 'green'
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