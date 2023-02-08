import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';

export default function Header({changeView}){
    return(
        <View style={styles.layout}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('incident')} style={styles.button}>
                <Text style={styles.myText}>Incident Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('patientInfo')} style={styles.button}>
                <Text style={styles.myText}>Patient Information</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeView('vital')} style={styles.button}>
                <Text style={styles.myText}>Vital Signs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('intervention')} style={styles.button}>
                <Text style={styles.myText}>Interventions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('procedures')} style={styles.button}>
                <Text style={styles.myText}>Procedures</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('medications')} style={styles.button}>
                <Text style={styles.myText}>Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('assessment')} style={styles.button}>
                <Text style={styles.myText}>Assessment & Transport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Clinical Practice Guidelines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Tools</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeView('checkList')} style={styles.button}>
                <Text style={styles.myText}>Checklists</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: '23%',
        width: '100%',
        backgroundColor: 'dodgerblue'
    },
    button:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        height: '26%',
        width: '20%'
    }
})

