import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import IncidentDetails from './components/IncidentDetails'
import PatientInformation from './components/PatientInformation';


export default function App() {
 
  return (
    <View style={styles.container}>
      
    
      <PatientInformation/>

      <ExpoStatusBar style="auto" />
    </View>
  );
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
  middle:{
    justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
  }
  
});

