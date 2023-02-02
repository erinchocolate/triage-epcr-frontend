import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import fernmark from '../assets/fernmark.jpg';
import triage from '../assets/triage_logo.jpg';

export default function Footer({changeView}) {
  return (
    <View style={styles.layout}>
        <Image style={styles.image} source={fernmark}/>
        <Image style={styles.image} source={triage}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>EPCR Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit EPCR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>changeView('pdf')} style={styles.button}>
            <Text style={styles.text}>Review EPCR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Print EPCR</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles =StyleSheet.create({
    layout:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        backgroundColor: 'dodgerblue'
    },
    image: {
      width: 120,
      height: 100,
      resizeMode: 'contain'
    },
    button:{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      width: '13%'
}})
