// Thirdparty Imports
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar, Dimensions } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
// Local Imports
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
import ButtonPage from './components/ButtonPage';
import EPCRRetrievalPage from './components/EPCRRetrievalPage';
import ClinicalPracticeGuidelines from './components/ClinicalPracticeGuidelines';
import PatientPDF from './components/PatientPDF';
import OpenCamera from './components/CameraScreen';
import CheckList from './components/checkList';



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
  const [view, setView] = useState('buttonpage');
  //Incident ID
  const [incID, setIncID] = useState('Auto-Generated');

  //Data handling for retrieval
  const dataFunctions = {changeView, setView, setIncidentDetails, setPatientInfo, setVitalSigns, setInterventions, setAllIv, setProcedures, setAllMedication, setAssTransInfo, setIncID}

  //For SQL Stuff
  const [publicIncidentType, setPublicIncidentType] = useState('');
  const [publicHospital, setPublicHospital] = useState('');
  const [publicVehicleType, setPublicVehicleType] = useState(''); 
  const [publicTransportStatus, setPublicTransportStatus] = useState('');
  const [publicOpaSize, setPublicOpaSize] = useState('');
  const [publicEttSize, setPublicEttSize] = useState('');
  const [publicLmaSize, setPublicLmaSize] = useState('');
  const [publicCatheter, setPublicCatheter] = useState('');
  const [publicEyes, setPublicEyes] = useState('');
  const [publicVoice, setPublicVoice] = useState('');
  const [publicMotor, setPublicMotor] = useState('');
  const [publicFourLeadECG, setPublicFourLeadECG] = useState('');
  const [publicTwelveLeadECG, setPublicTwelveLeadECG] = useState('');


  const publicVariables = {publicIncidentType: publicIncidentType, 
                            publicHospital: publicHospital,
                            publicVehicleType: publicVehicleType,
                            publicTransportStatus: publicTransportStatus,
                            publicOpaSize: publicOpaSize,
                            publicEttSize: publicEttSize,
                            publicLmaSize: publicLmaSize,
                            publicCatheter: publicCatheter};


  function changeView(argument){
    setView(argument);
  }

  function convertArray(array){
    let string = "[" + array.map(function(obj){
      return JSON.stringify(obj);
    }).join(",") + "]";

    return string;
  }

  async function sendToDatabase(){

    if(incID==='Auto-Generated'){
    axios.post('http://192.168.1.134:3000/epcrs/',{
      first_name: patientInfo.fName,
      middle_name: patientInfo.mName, 
      last_name: patientInfo.lName, 
      nhi_number: patientInfo.nhiNo, 
      dob: patientInfo.dob, 
      gender: patientInfo.gender, 
      age: patientInfo.age, 
      address: patientInfo.address, 
      patient_medication: patientInfo.medications, 
      patient_allergy: patientInfo.allergies, 
      incident_type: publicIncidentType, 
      incident_note: incidentDetails.notes,         
      notified_time: incidentDetails.notifyT, 
      responded_time: incidentDetails.responseT, 
      located_time: incidentDetails.locatedT, 
      departed_time: incidentDetails.departedT,
      destination_time: incidentDetails.destinationT, 
      incident_location: incidentDetails.location, 
      subjective_note: assTransInfo.subjective,
      objective_note: assTransInfo.objective, 
      assessment_note: assTransInfo.assessment, 
      plan_note: assTransInfo.plan, 
      vehicle: publicVehicleType, 
      transport_status: publicTransportStatus, 
      destination: publicHospital, 
      estimate_arrival_time: assTransInfo.arrivalTime, 
      incident_medication: convertArray(allMedication), 
      cardioversion: procedures.cardioversion, 
      pacing: procedures.pacing, 
      cardiac_arrest: procedures.cardiacArrest, 
      rsi: procedures.rsi, 
      mechanical_ventilation: procedures.mechVent, 
      cpap: procedures.cpap, 
      surgical_cric: procedures.cric, 
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
      gcs: vitalSigns.gcs,
      eye_response: publicEyes,
      voice_response:publicVoice,
      motor_response:publicMotor,
      four_lead_ecg: publicFourLeadECG,
      twelve_lead_ecg: publicTwelveLeadECG,
      opa: interventions.opa,
      opa_size: publicOpaSize,
      lma: interventions.lma,
      lma_size: publicLmaSize,
      ett: interventions.ett,
      ett_size: publicEttSize,
      suction: interventions.suction,
      suction_catheter: publicCatheter,
      peep: interventions.peep,
      peep_note: interventions.peepText,
      bvm: interventions.bvm,
      interventions: convertArray(allIv),
    
    })
    .then(function (response){
      setIncID(response.request._response);
    })
    .catch(function (error){
      console.log(error);
    })
  }
  else{
    axios.put(`http://192.168.1.134:3000/epcrs/${incID}`,{
      first_name: patientInfo.fName,
      middle_name: patientInfo.mName, 
      last_name: patientInfo.lName, 
      nhi_number: patientInfo.nhiNo, 
      dob: patientInfo.dob, 
      gender: patientInfo.gender, 
      age: patientInfo.age, 
      address: patientInfo.address, 
      patient_medication: patientInfo.medications, 
      patient_allergy: patientInfo.allergies, 
      incident_type: publicIncidentType, 
      incident_note: incidentDetails.notes,         
      notified_time: incidentDetails.notifyT, 
      responded_time: incidentDetails.responseT, 
      located_time: incidentDetails.locatedT, 
      departed_time: incidentDetails.departedT,
      destination_time: incidentDetails.destinationT, 
      incident_location: incidentDetails.location, 
      subjective_note: assTransInfo.subjective,
      objective_note: assTransInfo.objective, 
      assessment_note: assTransInfo.assessment, 
      plan_note: assTransInfo.plan, 
      vehicle: publicVehicleType, 
      transport_status: publicTransportStatus, 
      destination: publicHospital, 
      estimate_arrival_time: assTransInfo.arrivalTime, 
      incident_medication: convertArray(allMedication), 
      cardioversion: procedures.cardioversion, 
      pacing: procedures.pacing, 
      cardiac_arrest: procedures.cardiacArrest, 
      rsi: procedures.rsi, 
      mechanical_ventilation: procedures.mechVent, 
      cpap: procedures.cpap, 
      surgical_cric: procedures.cric, 
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
      gcs: vitalSigns.gcs,
      eye_response: publicEyes,
      voice_response:publicVoice,
      motor_response:publicMotor,
      four_lead_ecg: publicFourLeadECG,
      twelve_lead_ecg: publicTwelveLeadECG,
      opa: interventions.opa,
      opa_size: publicOpaSize,
      lma: interventions.lma,
      lma_size: publicLmaSize,
      ett: interventions.ett,
      ett_size: publicEttSize,
      suction: interventions.suction,
      suction_catheter: publicCatheter,
      peep: interventions.peep,
      peep_note: interventions.peepText,
      bvm: interventions.bvm,
      interventions: convertArray(allIv)
    })
    .then(function (response){
      console.log(response)
    })
    .catch(function (error){
      console.log(error)
    })
  }
  }

  if(view==='RetrievalPage'){
    return(
      <View style={styles.container}>
        <EPCRRetrievalPage 
          changeView={changeView}
          {...dataFunctions}
          />
      </View>
    )
  }

  else if(view==='pdf'){
    return(
      <PatientPDF 
        changeView={changeView}
        incidentDetails={incidentDetails}
        patientInfo={patientInfo}
        vitalSigns={vitalSigns}
        allMedication={allMedication}
        procedures={procedures}
        allIv={allIv}
        assTransInfo={assTransInfo}
        publicVariables={publicVariables}/>
    )
  }
  else if(view==='cameraScreen'){
    return(
      <OpenCamera changeView={changeView} />
    )
  }
  else if (view === 'homepage') {
    return (
      <Homepage changeView={changeView}/>
    )
  }
  else if (view === 'buttonpage') {
    return (
      <ButtonPage changeView={changeView}/>
    )
  }
  else{
  return (
    <View style={styles.container}>
      <Header changeView={changeView} />
      {view === 'assessment' ?<Assessment sendToDatabase={sendToDatabase} assTransInfo={assTransInfo} setAssTransInfo={setAssTransInfo} setPublicHospital={setPublicHospital} setPublicVehicleType={setPublicVehicleType} setPublicTransportStatus={setPublicTransportStatus} changeView={changeView} /> : <></>}
      {view==='incident'?<IncidentDetails sendToDatabase={sendToDatabase} incID={incID} incidentDetails={incidentDetails} setIncidentDetails={setIncidentDetails} setPublicIncidentType={setPublicIncidentType}/>:<></>}
      {view==='patientInfo'?<PatientInformation sendToDatabase={sendToDatabase} patientInfo={patientInfo} setPatientInfo={setPatientInfo}/>:<></>}
      {view==='procedures'?<Procedures procedures={procedures} setProcedures={setProcedures}/>:<></>}
      {view === 'medications' ? <Medications allMedication={allMedication} setAllMedication={setAllMedication}/> : <></>}
      {view === 'intervention' ? <Intervention interventions={interventions} setInterventions={setInterventions} setPublicCatheter={setPublicCatheter} setPublicLmaSize={setPublicLmaSize} setPublicEttSize={setPublicEttSize} setPublicOpaSize={setPublicOpaSize} allIv={allIv} setAllIv={setAllIv}/> : <></>}
      {view==='vital'?<Vital vitalSigns={vitalSigns} setVitalSigns={setVitalSigns} setPublicEyes={setPublicEyes} setPublicVoice={setPublicVoice} setPublicMotor={setPublicMotor} setPublicFourLeadECG={setPublicFourLeadECG} setPublicTwelveLeadECG={setPublicTwelveLeadECG}/>:<></>}
      {view==='checkList'?<CheckList checkLists={checkLists} setCheckLists={setCheckLists}/>:<></>}
      {view === 'cameraScreen' ? <OpenCamera /> : <></>}
      {view === 'clinicalPracticeGuidelines' ? <ClinicalPracticeGuidelines/> : <></>}
      <Footer changeView={changeView} sendToDatabase={sendToDatabase}/>
      <ExpoStatusBar style="auto" />
    </View>
  );
}}
//
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

