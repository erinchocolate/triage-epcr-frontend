import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions  } from 'react-native';
import fernmark from '../assets/fernmark.jpg';
import triage from '../assets/triage_logo.jpg';

export default function HomepageFooter({changeView}) {
  return (
    <View style={styles.layout}>
      <View style={styles.imageLayout}>
      <Image style={styles.image} source={fernmark}/>
      <Image style={styles.image} source={triage} />
      </View>
        <View style={styles.buttonLayout}>
        <TouchableOpacity onPress={() => changeView('incident')} style={styles.button}>
          <Text style={styles.text}>Create New EPCR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>changeView('retrieve')} style={styles.button}>
          <Text style={styles.text}>Retrieve EPCR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  layout: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.10,
    width: '100%',
    backgroundColor: 'dodgerblue'
  },
  buttonLayout: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  imageLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 120,
    height: 100,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    height: '60%',
    width: '13%'
  },
})