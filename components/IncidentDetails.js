import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import DropDown from '../utility/DropDown';

export default function IncidentDetails() {

    const [incidentNotes, setIncidentNotes] = useState('');
    const [notifiedTime, setNotifiedTime] = useState('');
    const [respondedTime, setRespondedTime] = useState('');
    const [locatedTime, setLocatedTime] = useState('');
    const [departedTime, setDepartedTime] = useState('');
    const [destinationTime, setDestinationTime] = useState('');
    const [hospitalLocation, setHospitalLocation] = useState('');

     
    return (
    <View style={styles.layout}>
        <View style={styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Incident ID: </Text>
            </View>
            <TextInput
                editable={false}
                placeholder='Auto-Generated'
                style={styles.input}
                />
            <View style={styles.title}>
                <Text style={styles.myText}>Incident Type: </Text>
            </View>
            <View style={styles.dropdown}>
            <DropDown
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
                onChangeText={incidentNotes=>setIncidentNotes(incidentNotes)}
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
                onChangeText={notifiedTime=>setNotifiedTime(notifiedTime)}
                placeholder={'Notified Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Responded: </Text>
            </View>
            <TextInput
                value={respondedTime}
                onChangeText={respondedTime=>setRespondedTime(respondedTime)}
                placeholder={'Responded Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Located: </Text>
            </View>
            <TextInput
                value={locatedTime}
                onChangeText={locatedTime=>setLocatedTime(locatedTime)}
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
                onChangeText={departedTime=>setDepartedTime(departedTime)}
                placeholder={'Departed Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
            <View style={styles.title}>
                <Text style={styles.myText}>Destination: </Text>
            </View>
            <TextInput
                value={destinationTime}
                onChangeText={destinationTime=>setDestinationTime(destinationTime)}
                placeholder={'Destination Time'}
                placeholderTextColor = '#b3b3b3'
                style={styles.input}/>
        </View>
        <View style={styles.row}>
            <View style={styles.title}>
                <Text style={styles.myText}>Location </Text>
            </View>
            <TextInput
                value={hospitalLocation}
                onChangeText={hospitalLocation=>setHospitalLocation(hospitalLocation)}
                placeholder={'Start typing and this will bring up options'}
                placeholderTextColor = '#b3b3b3'
                style={styles.wideInput}/>
            <TouchableOpacity style={styles.button}>
                <Text>Save</Text>
            </TouchableOpacity>

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
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
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
    }
})