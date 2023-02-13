import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';





export default function IncidentDetails({incID, incidentDetails, setIncidentDetails, setPublicIncidentType}) {

    const [incidentType, setIncidentType] = useState(incidentDetails.type || null);
    const [incidentNotes, setIncidentNotes] = useState(incidentDetails.notes || '');
    const [notifiedTime, setNotifiedTime] = useState(incidentDetails.notifyT || '');
    const [respondedTime, setRespondedTime] = useState(incidentDetails.responseT || '');
    const [locatedTime, setLocatedTime] = useState(incidentDetails.locatedT || '');
    const [departedTime, setDepartedTime] = useState(incidentDetails.departedT || '');
    const [destinationTime, setDestinationTime] = useState(incidentDetails.destinationT || '');
    const [data, setLocation] = useState(incidentDetails.location || '');

    function typeTest(){
        console.log(incidentType);
    }
     
    return (
    <View style={styles.layout}>
        <View style={styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Incident ID: </Text>
            </View>
            <TextInput
                editable={false}
                placeholder={incID}
                style={styles.input}
                />
            <View style={styles.title}>
                <Text style={styles.myText}>Incident Type: </Text>
            </View>
            <View style={styles.dropdown}>
            <DropDown
                value={incidentType}
                setValue={incidentType=>{
                    setIncidentType(incidentType);
                    setPublicIncidentType(incidentType);
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, type: incidentType}))}}
                items={[
                    {label: 'Medical', value: 'medicalIncident'},
                    {label: 'ACC', value: 'accIncident'},
                    {label: 'Transfer', value: 'transferIncident'},
                    {label: 'No EPCR', value: 'noepcrIncident'}
                ]}
                placeholder='Type'/>
            </View>
            
            <TextInput
                value={incidentNotes}
                onChangeText={incidentNotes=>{
                    setIncidentNotes(incidentNotes)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, notes: incidentNotes}))}}
                placeholder={'Notes'}
                placeholderTextColor = '#b3b3b3'
                style={styles.wideInput}/>
        </View>
        <View style = {styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Notified: </Text>
            </View>
            <TextInput
                value={notifiedTime}
                onChangeText={notifiedTime=>{
                    setNotifiedTime(notifiedTime)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, notifyT: notifiedTime}))}}
                placeholder={'Notified Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Responded: </Text>
            </View>
            <TextInput
                value={respondedTime}
                onChangeText={respondedTime=>{
                    setRespondedTime(respondedTime)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, responseT: respondedTime}))}}
                placeholder={'Responded Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Located: </Text>
            </View>
            <TextInput
                value={locatedTime}
                onChangeText={locatedTime=>{
                    setLocatedTime(locatedTime)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, locatedT: locatedTime}))}}
                placeholder={'Located Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
        </View>
        <View style = {styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Departed: </Text>
            </View>
            <TextInput
                value={departedTime}
                onChangeText={departedTime=>{
                    setDepartedTime(departedTime)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, departedT: departedTime}))}}
                placeholder={'Departed Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Destination: </Text>
            </View>
            <TextInput
                value={destinationTime}
                onChangeText={destinationTime=>{
                    setDestinationTime(destinationTime)
                    setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, destinationT: destinationTime}))}}
                placeholder={'Destination Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
        </View>
        <View style={styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Location </Text>
            </View>
            
            <Text>
                <GooglePlacesAutocomplete
                placeholder='Search'
                value={data}
                onChangeText={data=>{
                setLocation(data)
                setIncidentDetails(prevIncidentDetails=>({...prevIncidentDetails, location: data}))}}
                query={{
                key: process.env.API_KEY,
                language: 'en',
                components: 'country:nz'
    }}
    
  />

  
</Text>

        </View>
    </View>
  )
}

const commonStyle = {
        borderColor: '#3b3b3b',
        borderWidth: 1,
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.58,
        width: '100%',
        backgroundColor: '#4A96C9',  
    },
    row:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
    },
    dropdown:{
        width: '15%',
        margin: 10,
        height: '50%',
        zIndex: 1000,
        elevation: 1000   
        
    },
    title:{
        ...commonStyle,
        width: '13%',
        backgroundColor: 'white'

    },
    input:{
        ...commonStyle,
        width: '15%',
        paddingLeft: 10,
        backgroundColor: 'white',
        zIndex: 1,
        elevation: 1

    },
    wideInput:{
        ...commonStyle,
        width: '34%',
        paddingLeft: 10,
        backgroundColor: 'white'

    },
    button:{
        ...commonStyle,
        width: '25%',
        backgroundColor: '#93ff33',
        marginLeft: 'auto'
    },
  
})