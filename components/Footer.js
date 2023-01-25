import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.layout}>
        <Image style={styles.image} source={require('../assets/st_john.png') }/>
        <Image style={styles.image} source={require('../assets/triage_logo.jpg')}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>EPCR Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Submit EPCR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Review EPCR</Text>
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
      width: 80,
      height: 80,
      resizeMode: 'contain'
    },
    button:{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      width: '13%'
  }
})
