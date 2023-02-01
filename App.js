import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import IncidentDetails from './components/IncidentDetails';
import PatientInformation from './components/PatientInformation';
import Procedures from './components/Procedures';
import Medications from './components/Medications';
import Intervention from './components/Intervention';
import Assessment from './components/Assessment';
import Vital from './components/Vital';
import { useState } from 'react';

export default function App() {


  //Data to be stored - Incident Details
  const [incidentDetails, setIncidentDetails] = useState({});
  //Data to be stored - Patient Info
  const [patientInfo, setPatientInfo] = useState({});
  //Data to be stored - Procedures
  const [procedures, setProcedures] = useState({});
  //Data to be stored - Medication
  const [allMedication, setAllMedication] = useState([]);




  const [view, setView] = useState('medications');

  function changeView(argument){
    setView(argument);
  }

  return (
    <View style={styles.container}>
      <Header changeView={changeView}/>
      {view==='assessment'? <Assessment/>:<></>}
      {view==='incident'?<IncidentDetails incidentDetails={incidentDetails} setIncidentDetails={setIncidentDetails}/>:<></>}
      {view==='patientInfo'?<PatientInformation patientInfo={patientInfo} setPatientInfo={setPatientInfo}/>:<></>}
      {view==='procedures'?<Procedures procedures={procedures} setProcedures={setProcedures}/>:<></>}
      {view === 'medications' ? <Medications allMedication={allMedication} setAllMedication={setAllMedication}/> : <></>}
      {view === 'intervention' ? <Intervention /> : <></>}
      {view==='vital'?<Vital/>:<></>}
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
    paddingTop: 20
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

