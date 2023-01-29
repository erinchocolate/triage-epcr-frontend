import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import IncidentDetails from './components/IncidentDetails';
import PatientInformation from './components/PatientInformation';
import Procedures from './components/Procedures';
import Medications from './components/Medications';

export default function App() {

  

  return (
    <View style={styles.container}>
      <Header />
      <IncidentDetails/>
      <Footer />
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
    paddingTop: StatusBar.currentHeight
  },
  middle:{
    justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '58%',
        width: '100%',
        backgroundColor: 'white'
  }
});

