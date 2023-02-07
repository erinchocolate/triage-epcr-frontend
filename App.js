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
import OpenCamera from './components/CameraScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import React from 'react';


export default function App() {

 const [view, setView] = useState('medications');
  

  function changeView(argument){
    setView(argument);
  }


  return (
    <View style={styles.container}>
      <Header changeView={changeView}/>
      {view==='assessment'? <Assessment/>:<></>}
      {view==='incident'?<IncidentDetails/>:<></>}
      {view==='patientInfo'?<PatientInformation/>:<></>}
      {view==='procedures'?<Procedures/>:<></>}
      {view === 'medications' ? <Medications /> : <></>}
      {view === 'intervention' ? <Intervention /> : <></>}
      {view==='vital'?<Vital/>:<></>} 
      {view==='cameraScreen'?<OpenCamera/>:<></>} 
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

