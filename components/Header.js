import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';

export default function Header(){
    return(
        <View style={styles.layout}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Incident Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Pateint Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Vital Signs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Interventions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Procedures</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Medications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Assessment & Transport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Clinical Practice Guidelines</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.myText}>Tools</Text>
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
        height: '30%',
        width: '100%',
        backgroundColor: 'dodgerblue'
    },
    button:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: '20%',
        width: '20%'
    }
})

