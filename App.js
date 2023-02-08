import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import IncidentDetails from './components/IncidentDetails';
import PatientInformation from './components/PatientInformation';
import Procedures from './components/Procedures';
import Medications from './components/Medications';
import Intervention from './components/Intervention';
import Assessment from './components/Assessment';
import Vital from './components/Vital';
import Homepage from './components/HomePage';
import { useState } from 'react';
import PatientPDF from './components/PatientPDF';
import OpenCamera from './components/CameraScreen';
import CheckList from './components/checkList';
import axios from 'axios';


export default function App() {

//DATA TO BE STORED DURING SESSION
  //Data to be stored - Incident Details
  const [incidentDetails, setIncidentDetails] = useState({});
  //Data to be stored - Patient Info
  const [patientInfo, setPatientInfo] = useState({});
  //Data to be stored - Vital Signs
  const [vitalSigns, setVitalSigns] = useState({})
  //Data to be stored - Interventions
  const [interventions, setInterventions] = useState({});
  const [allIv, setAllIv] = useState([]);
  //Data to be stored - Procedures
  const [procedures, setProcedures] = useState({});
  //Data to be stored - Medication
  const [allMedication, setAllMedication] = useState([]);
  //Data to be stored - Assessment & Transport
  const [assTransInfo, setAssTransInfo] = useState({});
  //Data to be stored - CheckList
  const [checkLists, setCheckLists] = useState({});
  //Change View
  const [view, setView] = useState('assessment');

  //Incident ID
  const [incID, setIncID] = useState('Auto-Generated');

  //For SQL Stuff
  const [publicIncidentType, setPublicIncidentType] = useState('');
  const [publicHospital, setPublicHospital] = useState('');

  const publicVariables = {publicIncidentType: publicIncidentType, 
                            publicHospital: publicHospital};
  





  function changeView(argument){
    setView(argument);
    console.log(incidentDetails);  
  }


  async function sendToDatabase(){

    if(incID==='Auto-Generated'){
      console.log(publicIncidentType)
    axios.post('http://10.140.34.240:3000/epcrs/',{
      first_name: patientInfo.fName,
      middle_name: patientInfo.mName, 
      last_name: patientInfo.lName, 
      nhi_number: patientInfo.nhiNo, 
      dob: patientInfo.dob, 
      gender: patientInfo.gender, 
      age: patientInfo.age, 
      address: patientInfo.address, 
      patient_medication: '', 
      patient_allergy: '', 
      incident_type: publicIncidentType, 
      incident_note: incidentDetails.notes,         
      notified_time: incidentDetails.notifyT, 
      responded_time: incidentDetails.responseT, 
      located_time: incidentDetails.locatedT, 
      departed_time: incidentDetails.departedT,
      destination_time: incidentDetails.destinationT, 
      location_note: incidentDetails.location, 
      subjective_note: assTransInfo.subjective,
      objective_note: assTransInfo.objective, 
      assessment_note: assTransInfo.assessment, 
      plan_note: assTransInfo.plan, 
      vehicle: assTransInfo.vehicle, 
      transport_status: assTransInfo.transport, 
      destination: publicHospital, 
      estimate_arrival_time: assTransInfo.arrivalTime, 
      incident_medication: '', 
      cardioversion: procedures.cardioversion, 
      pacing: procedures.pacing, 
      cardiac_arrest: procedures.cardiacArrest, 
      rsi: procedures.rsi, 
      mechanical_ventilation: procedures.mechVent, 
      cpap: procedures.cpap, 
      sugical_cric: procedures.cric, 
      needle_decompression: procedures.needleDecomp, 
      finger_thoracostomy: procedures.fingerThorac, 
      fi_block: procedures.fiBlock,
      bp: vitalSigns.BP,
      heart_rate: vitalSigns.heartRate,
      resp_rate: vitalSigns.respRate,
      temp: vitalSigns.temp,
      bsl: vitalSigns.BSL,
      spo2: vitalSigns.SPo2,
      etco2: vitalSigns.ETCo2,
      monitor: vitalSigns.monitor,
      manual: vitalSigns.manual,
      palpatation: vitalSigns.palpatation,
      eye_response: vitalSigns.eyes,
      voice_response:vitalSigns.voice,
      motor_response:vitalSigns.motor,
      four_lead_ecg: vitalSigns.fourLead,
      twelve_lead_ecg: vitalSigns.twelveLead,
      opa: interventions.opa,
      opa_size: "opa_size",
      opa_location: "opa_location",
      lma: interventions.lma,
      lma_size: "lma_size",
      lma_location: "lma_location",
      npa: interventions.npa,
      npa_size: "npa_size",
      npa_location: "npa_location",
      ett: interventions.ett,
      ett_size: "ett_size",
      ett_location: "ett_location",
      peep: interventions.peep,
      peep_note: "peep_note",
      suction: interventions.suction,
      suction_catheter:"suction_catheter",
      bvm: interventions.bvm
    })
    .then(function (response){
      console.log(response.request._response);
      setIncID(response.request._response);
    })
    .catch(function (error){
      console.log(error);
    })
  }
  else{
    axios.put(`http://10.140.34.240:3000/epcrs/${incID}`,{
      first_name: patientInfo.fName,
      middle_name: patientInfo.mName, 
      last_name: patientInfo.lName, 
      nhi_number: patientInfo.nhiNo, 
      dob: patientInfo.dob, 
      gender: patientInfo.gender, 
      age: patientInfo.age, 
      address: patientInfo.address, 
      patient_medication: '', 
      patient_allergy: '', 
      incident_type: publicIncidentType, 
      incident_note: incidentDetails.notes,         
      notified_time: incidentDetails.notifyT, 
      responded_time: incidentDetails.responseT, 
      located_time: incidentDetails.locatedT, 
      departed_time: incidentDetails.departedT,
      destination_time: incidentDetails.destinationT, 
      location_note: incidentDetails.location, 
      subjective_note: assTransInfo.subjective,
      objective_note: assTransInfo.objective, 
      assessment_note: assTransInfo.assessment, 
      plan_note: assTransInfo.plan, 
      vehicle: assTransInfo.vehicle, 
      transport_status: assTransInfo.transport, 
      destination: publicHospital, 
      estimate_arrival_time: assTransInfo.arrivalTime, 
      incident_medication: '', 
      cardioversion: procedures.cardioversion, 
      pacing: procedures.pacing, 
      cardiac_arrest: procedures.cardiacArrest, 
      rsi: procedures.rsi, 
      mechanical_ventilation: procedures.mechVent, 
      cpap: procedures.cpap, 
      sugical_cric: procedures.cric, 
      needle_decompression: procedures.needleDecomp, 
      finger_thoracostomy: procedures.fingerThorac, 
      fi_block: procedures.fiBlock,
      bp: vitalSigns.BP,
      heart_rate: vitalSigns.heartRate,
      resp_rate: vitalSigns.respRate,
      temp: vitalSigns.temp,
      bsl: vitalSigns.BSL,
      spo2: vitalSigns.SPo2,
      etco2: vitalSigns.ETCo2,
      monitor: vitalSigns.monitor,
      manual: vitalSigns.manual,
      palpatation: vitalSigns.palpatation,
      eye_response: vitalSigns.eyes,
      voice_response:vitalSigns.voice,
      motor_response:vitalSigns.motor,
      four_lead_ecg: vitalSigns.fourLead,
      twelve_lead_ecg: vitalSigns.twelveLead,
      opa: interventions.opa,
      opa_size: "opa_size",
      opa_location: "opa_location",
      lma: interventions.lma,
      lma_size: "lma_size",
      lma_location: "lma_location",
      npa: interventions.npa,
      npa_size: "npa_size",
      npa_location: "npa_location",
      ett: interventions.ett,
      ett_size: "ett_size",
      ett_location: "ett_location",
      peep: interventions.peep,
      peep_note: "peep_note",
      suction: interventions.suction,
      suction_catheter:"suction_catheter",
      bvm: interventions.bvm
    })
    .then(function (response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    })
  }
  }

  if(view==='pdf'){
    return(
      <PatientPDF 
        changeView={changeView}
        incidentDetails={incidentDetails}
        patientInfo={patientInfo}
        vitalSigns={vitalSigns}
        assTransInfo={assTransInfo}
        publicVariables={publicVariables}/>
    )
  }
  else if(view==='cameraScreen'){
    return(
      <OpenCamera changeView={changeView}/>
    )
  }
  else{
  return (
    <View style={styles.container}>
      <Header changeView={changeView}/>
      {view==='assessment'? <Assessment sendToDatabase={sendToDatabase} assTransInfo={assTransInfo} setAssTransInfo={setAssTransInfo} setPublicHospital={setPublicHospital} changeView={changeView}/>:<></>}
      {view==='incident'?<IncidentDetails sendToDatabase={sendToDatabase} incID={incID} incidentDetails={incidentDetails} setIncidentDetails={setIncidentDetails} setPublicIncidentType={setPublicIncidentType}/>:<></>}
      {view==='patientInfo'?<PatientInformation sendToDatabase={sendToDatabase} patientInfo={patientInfo} setPatientInfo={setPatientInfo}/>:<></>}
      {view==='procedures'?<Procedures procedures={procedures} setProcedures={setProcedures}/>:<></>}
      {view === 'medications' ? <Medications allMedication={allMedication} setAllMedication={setAllMedication}/> : <></>}
      {view === 'intervention' ? <Intervention interventions={interventions} setInterventions={setInterventions} allIv={allIv} setAllIv={setAllIv}/> : <></>}
      {view==='vital'?<Vital vitalSigns={vitalSigns} setVitalSigns={setVitalSigns}/>:<></>}
      {view==='checkList'?<CheckList checkLists={checkLists} setCheckLists={setCheckLists}/>:<></>}
      {view==='cameraScreen'?<OpenCamera />:<></>}
      <Footer changeView={changeView}/>
      <ExpoStatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 20
  }
});

