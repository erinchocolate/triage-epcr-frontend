import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { createContext, useState } from 'react';
import DropDown from '../utility/DropDown';




export default function PatientInformation() {

        const [firstName, setFirstName] = useState('');
        const [middleName, setMiddleName] = useState('');
        const [surname, setSurname] = useState('');
        const [address, setAddress] = useState('');
        const [nhiNumber, setNhiNumber] = useState('');
        const [dateOfBirth, setDateOfBirth] = useState('');
        const [age, setAge] = useState('');
        const [gender, setGender] = useState('');
        const [medications, setMedications] = useState('');
        const [allergies, setAllergies] = useState('');

  return (
    <View style={styles.layout}>
        <View style = {styles.column}>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>First Name: </Text>
                </View>
                <TextInput
                    value={firstName}
                    onChangeText={firstName=>setFirstName(firstName)}
                    placeholder={'First Name'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Middle Name: </Text>
                </View>
                <TextInput
                    value={middleName}
                    onChangeText={middleName=>setMiddleName(middleName)}
                    placeholder={'Middle Name'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Surname: </Text>
                </View>
                <TextInput
                    value={surname}
                    onChangeText={surname=>setSurname(surname)}
                    placeholder={'Surname'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={{flexDirection: 'row', width: '30%', height: '100%'}}>
                <View style={styles.addressColumn}>
                    <View style={styles.address}>
                        <Text style={styles.myText}>Address: </Text>
                    </View>
                    <TouchableOpacity style={styles.addressSearch}>
                        <Text>Search Address</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.addressInputContainer}>
                    <TextInput
                            value={address}
                            onChangeText={address=>setAddress(address)}
                            placeholder={'Address'}
                            placeholderTextColor = '#b3b3b3'
                            style={styles.addressInput}/>
                </View>
                    
            </View>
        </View>
        <View style={styles.wideColumn}>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>NHI: </Text>
                </View>
                <TextInput
                    value={nhiNumber}
                    onChangeText={nhiNumber=>setNhiNumber(nhiNumber)}
                    placeholder={'NHI Number'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.nhiInput}/>
                <TouchableOpacity style={styles.nhiSearch}>
                        <Text>NHI Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.smallTitle}>
                    <Text style={styles.myText}>DOB: </Text>
                </View>
                <TextInput
                    value={dateOfBirth}
                    onChangeText={dateOfBirth=>setDateOfBirth(dateOfBirth)}
                    placeholder={'DOB'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.smallInput}/>
                <View style={styles.smallTitle}>
                    <Text style={styles.myText}>Age: </Text>
                </View>
                <TextInput
                    value={age}
                    onChangeText={age=>setAge(age)}
                    placeholder={'Age'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.smallInput}/>
                <View style={styles.smallTitle}>
                    <Text style={styles.myText}>Gender: </Text>
                </View>
                <TextInput
                    value={gender}
                    onChangeText={gender=>setGender(gender)}
                    placeholder={'Gender'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.smallInput}/>
            </View>
            <View style={styles.row}>
            <View style={styles.title}>
                    <Text style={styles.myText}>Medications</Text>
            </View>
            <TextInput
                value={medications}
                onChangeText={medications=>setMedications(medications)}
                placeholder={'Start typing to add'}
                placeholderTextColor = '#b3b3b3'
                style={styles.wideInput}/>
        </View>
        <View style={styles.row}>
            <View style={styles.title}>
                    <Text style={styles.myText}>Allergies</Text>
            </View>
            <TextInput
                value={allergies}
                onChangeText={allergies=>setAllergies(allergies)}
                placeholder={'Allergies'}
                placeholderTextColor = '#b3b3b3'
                style={styles.wideInput}/>
        </View>
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
        justifyContent: 'center',
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
    },
    column:{
        height: '90%',
        width: '35%'
    },
    wideColumn:{
        height: '90%',
        width: '63%',
        marginRight: 10
    },
    row:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
    },
    addressColumn:{
        width: '100%',
        height: '40%',
    },
    title:{
        ...commonStyle
    },
    smallTitle:{
        ...commonStyle,
        width: '13%'
    },
    smallInput:{
        ...commonStyle,
        width: '17%',
        paddingLeft: 10
    },
    address:{
       ...commonStyle,
       width: '90%',
       height: '30%',
       justifyContent: 'space-evenly',
    },
    addressSearch:{
        ...commonStyle,
        width: '90%',
        height: '45%',
        justifyContent: 'space-evenly',
        backgroundColor: 'dodgerblue',
        marginTop: 5
    },
    addressInputContainer:{
        width: '160%',
        height: '35%',
        marginLeft: 5
    },
    addressInput:{
        ...commonStyle,
        width: '125%',
        height: '100%',
        paddingLeft: 10,
    },
    nhiInput:{
        ...commonStyle,
        width: '40%',
        paddingLeft: 10

    },
    nhiSearch:{
        ...commonStyle,
        width: '30.5%',
        backgroundColor: 'dodgerblue',
    },
    dropdown:{
        width: '15%',
        margin: 10,
        height: '50%',
        zIndex: 1        
        
    },
    input:{
        ...commonStyle,
        paddingLeft: 10,
        width: '65%'
    },
    wideInput:{
        ...commonStyle,
        width: '74%',
        paddingLeft: 10,
    },
    button:{
        borderColor: '#3b3b3b',
        borderWidth: 1,
        width: '50%',
        height: '16%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#93ff33',
        marginLeft: 'auto'
    }
})