import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions  } from 'react-native';
import fernmark from '../assets/fernmark.jpg';
import triage from '../assets/triage_logo.jpg';

export default function ButtonPageFooter() {
  return (
    <View style={styles.layout}>
      <View style={styles.imageLayout}>
        <Image style={styles.image} source={fernmark}/>
        <Image style={styles.image} source={triage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Dimensions.get('window').height * 0.10,
    width: '100%',
    backgroundColor: 'dodgerblue'
  },
  imageLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 50,
  },
})