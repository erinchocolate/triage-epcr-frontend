import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import DropDown from '../utility/DropDown';

export default function IncidentDetails() {

    const [incidentNotes, setIncidentNotes] = useState('');
    const [notifiedTime, setNotifiedTime] = useState('');
    const [respondedTime, setRespondedTime] = useState('');
    const [locatedTime, setLocatedTime] = useState('');
    const [departedTime, setDepartedTime] = useState('');
    const [destinationTime, setDestinationTime] = useState('');

     
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
                placeholder='Incident Type'/>
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
    </View>
  )
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
        width: '80%',
        height: '30%'        
    },
    title:{
        borderColor: '#3b3b3b',
        borderWidth: 1,
        width: '15%',
        minHeight: '15%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'white'
    },
    dropdown:{
        width: '15%',
        margin: 10
    },
    input:{
        borderColor: '#3b3b3b',
        borderWidth: 1,
        width: '15%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: 'white'

    },
    wideInput:{
        borderColor: '#3b3b3b',
        borderWidth: 1,
        width: '35%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: 'white'

    }
})