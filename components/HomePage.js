import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import HomepageHeader from './HomepageHeader';
import HomepageFooter from './HomepageFooter';

export default function Homepage({ changeView }) {
  return (
    <View style={styles.container}>
      <HomepageHeader changeView={changeView} />
      <View style={styles.layout} />
      <HomepageFooter changeView={changeView} />
      <ExpoStatusBar style="auto" />
    </View>
    )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 20
  },
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.58,
    width: '100%',
    backgroundColor: 'dodgerblue', 
  }, 
});