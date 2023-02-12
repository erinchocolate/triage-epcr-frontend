import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import ButtonPageFooter from './ButtonPageFooter';

export default function ButtonPage({ changeView }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerLayout}/>
      <View style={styles.layout}>
        <TouchableOpacity style={styles.squareButton}>
          <Text style={styles.text}>Patient Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>changeView('homepage')} style={styles.squareButton}>
          <Text style={styles.text}>Electronic Patient Care Record</Text>
        </TouchableOpacity>
      </View>
      <ButtonPageFooter />
      <ExpoStatusBar style="auto" />
    </View>
  )
}

const colorStyle = {
  backgroundColor: 'dodgerblue',
}

const styles = StyleSheet.create({
  container: {
    ...colorStyle,
    width: '100%',
    height: '100%',
    paddingTop: 20
  },
  headerLayout: {
    ...colorStyle,
    height: '24%',
    width: '100%',
  },
  layout: {
    ...colorStyle,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.58,
    width: '100%',
  },
  squareButton: {
    width: 200,
    height: 200,
    backgroundColor: '#4DFF70',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    margin: 200,
    padding: 50,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
