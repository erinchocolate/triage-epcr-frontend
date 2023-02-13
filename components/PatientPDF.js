import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import PDFFooter from './PDFFooter';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function PatientPDF({changeView, incidentDetails, patientInfo, allMedication, procedures, allIv, assTransInfo, vitalSigns, publicVariables}) {

  //PDF Data Collection - Incident Details
  const {notifyT: notified = 'Not Specified', responseT: responded = 'Not Specified', locatedT: located = 'Not Specified',
          departedT: departed = 'Not Specified', destinationT: destinationT = 'Not Specified', location = 'Not Specified'} = incidentDetails;
  const {publicHospital: publicHospital = 'Not Specified'} = publicVariables;

  //PDF Data Collection - Patient Info
  const {fName: fName = 'Not Specified', mName: mName = 'Not Specified', lName: lName = 'Not Specified',
        address: address = 'Not Specified', nhiNo: nhiNo = 'Not Specified', dob: dob = 'Not Specified', 
        age: age='Not Specified', gender: gender='Not Specified', medications: medications = 'Not Specified',
        allergies: allergies = 'Not Specified'} = patientInfo;
  
  //PDF Data Collection - Treatment
  const {BP: BP = 'Not Specified', heartRate: heartRate = 'Not Specified', respRate: respRate = 'Not Specified',
         temp: temp = 'Not Specified', BSL: BSL = 'Not Specified', ETCo2: ETCo2 = 'Not Specified',
         SPo2: SPo2 = 'Not Specified'} = vitalSigns;

  //PDF Data Collection - Assessment/Transport
  const {subjective: subjective = 'Not Specified', objective: objective = 'Not Specified', assessment: assessment = 'Not Specified',
         plan: plan = 'Not Specified' , arrivalTime: arrivalTime = 'Not Specified'} = assTransInfo;

  const {publicTransportStatus: publicTransportStatus = 'Not Specified', publicVehicleType: publicVehicleType = 'Not Specified'} = publicVariables;

  //PDF Data Collection - Procedures
  const {cardioversion: cardioversion = 'Not Specified', pacing: pacing = 'Not Specified', cardiacArrest: cardiacArrest='Not Specified', rsi: rsi = 'Not Specified',
        mechVent: mechVent = 'Not Specified', cpap: cpap = 'Not Specified', cric: cric = 'Not Specified', needleDecomp: needleDecomp = 'Not Specified',
        fingerThorac: fingerThorac = 'Not Specified', fiBlock: fiBlock = 'Not Specified'} = procedures;




  const pdf = `
          <head>
            <style>
              div{
                display: flex;
                align-items: center;
                
              }
              .title{
                border: 0.2px solid black; 
                border-radius: 8%;
                padding: 1%;
                margin-right: 1%;
                background-color: #f0efeb;
              }
              .medicationTitle{
                border: 0.2px solid black; 
                border-radius: 0%;
                padding: 2%;
                background-color: #f0efeb;
                width: 90%;

              }
              h3{
                margin-right: 5%
              }
            </style>
            <script>
            </script>
          
          </head>    
          <body>
                <center>
                  <h1>Incident Details</h1>
                </center>
                  <h2>Incident Id: <u>#4357</u></h2>
                  <div>
                       <h2 class='title'>Notified</h2> <h3> ${notified}</h3>
                       <h2 class='title'>Responded </h2> <h3> ${responded}</h3>
                       <h2 class='title'>Located </h2> <h3> ${located}</h3>
                  </div>
                  <div>
                       <h2 class='title'>Departed </h2> <h3> ${departed}</h3>
                       <h2 class='title'>Destination </h2> <h3> ${destinationT}</h3>
                  </div>
                  <div>
                       <h2 class='title'>Location</h2> <h3> ${location}</h3>
                       <h2 class='title'>Hospital</h2> <h3> ${publicHospital}</h3>
                  </div>
                <hr>
                <center>
                  <h1>Patient Details</h1>
                </center>
                  <div>
                        <h2 class='title'>First Name</h2> <h3> ${fName}</h3>
                        <h2 class='title'>Middle Name </h2> <h3> ${mName}</h3>
                        <h2 class='title'>Surname </h2> <h3> ${lName}</h3>
                  </div>                  
                  <div><h2 class='title'>Address </h2> <h3> ${address}</h3></div>
                  <div>
                        <h2 class='title'>NHI</h2> <h3> ${nhiNo}</h3>
                        <h2 class='title'>DOB </h2> <h3> ${dob}</h3>
                        <h2 class='title'>Age </h2> <h3> ${age}</h3>
                        <h2 class='title'>Gender </h2> <h3> ${gender}</h3>
                  </div>
                  <div><h2 class='title'>Medications: </h2> <h3> ${medications}</h3></div>
                  <div><h2 class='title'>Allergies: </h2> <h3> ${allergies}</h3></div>
                <hr>
                <center>
                  <h1>Treatment</h1>
                </center>
                  <div>
                        <h2 class='title'>BP</h2> <h3> ${BP}</h3>
                        <h2 class='title'>HR </h2> <h3> ${heartRate}</h3>
                        <h2 class='title'>RR </h2> <h3> ${respRate}</h3>
                        <h2 class='title'>Temp </h2> <h3> ${temp}</h3>
                  </div> 
                  <div>
                        <h2 class='title'>BSL </h2> <h3> ${BSL}</h3>
                        <h2 class='title'>SPo2 </h2> <h3> ${SPo2}</h3>
                        <h2 class='title'>ETCo2 </h2> <h3> ${ETCo2}</h3>
                  </div>
                  <hr>
                <center>
                  <h1>Procedures </h1>
                </center>
                  <div>
                  ${(function(){
                    if(cardioversion=='1'){
                    return '<h2 class="title">Cardioversion</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(pacing=='1'){
                    return '<h2 class="title">Pacing</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(cardiacArrest=='1'){
                    return '<h2 class="title">Cardiac Arrest</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(rsi=='1'){
                    return '<h2 class="title">RSI</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  </div> 
                  <div>
                  ${(function(){
                    if(mechVent=='1'){
                    return '<h2 class="title">Mechanical Ventilation</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(cric=='1'){
                    return '<h2 class="title">Surgical CRIC</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(cpap=='1'){
                    return '<h2 class="title">CPAP</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  </div> 
                  <div>
                  ${(function(){
                    if(needleDecomp=='1'){
                    return '<h2 class="title">Needle Decompression</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(fingerThorac=='1'){
                    return '<h2 class="title">Finger Thoracostomy</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  ${(function(){
                    if(fiBlock=='1'){
                    return '<h2 class="title">FI Block</h2> <h3>Confirmed</h3>';
                  }
                  return '';})()}
                  </div> 
                  <hr>
                <center>
                  <h1>Assessment Notes</h1>
                    <h2 class='medicationTitle'>Subjective</h2> <h3> ${subjective}</h3>
                    <h2 class='medicationTitle'>Objective</h2> <h3> ${objective}</h3>
                    <h2 class='medicationTitle'>Assessment</h2> <h3> ${assessment}</h3>
                    <h2 class='medicationTitle'>Plan</h2> <h3> ${plan}</h3>
                    <div>
                          <h2 class='title'>E.T.A</h2> <h3> ${arrivalTime}</h3>
                          <h2 class='title'>Vehicle Type</h2> <h3> ${publicVehicleType}</h3>
                          <h2 class='title'>Transport Status</h2> <h3> ${publicTransportStatus}</h3>
                          <h2 class='title'>Destination</h2> <h3> ${publicHospital}</h3>
                    </div> 


                </center>
                
                ${allMedication.map((medication)=>(
                    "<h2 class=' medicationTitle'>" + medication.medicationName + "</h2> <h3>Amount Administered: " + medication.medicationAmount + "</h3><h3> Time Administered: " +medication.medicationTime + "</h3>"
                ))}

                <center>
                <hr>
                <h1>Interventions</h1>
              </center>
              
              ${allIv.map((iv)=>(
                  "<h2 class=' medicationTitle'>" + iv.IVType + "</h2> <h3>Size: " + iv.IVSize + "</h3><h3> Location: " +iv.IVLocation + "</h3>"
              ))}
                  
                </body>`
  

  async function print(){
    await Print.printAsync({
      html: pdf
    });
  } 

  async function share(){
      const {uri} = await Print.printToFileAsync({ html: pdf });
      Sharing.shareAsync(uri);
  }


  return (
    <>
      <WebView 
      originWhitelist={['*']}
      source={{ html: pdf }}     
      style={{ height:"100%", width:"100%" }}
      />
      <PDFFooter
        print={print}
        share={share}
        changeView={changeView}
        />
    </>  )
}

const styles = StyleSheet.create({
    
    layout: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flex: 1,
    },
    container:{
      backgroundColor: 'red',
      width: '100%',
      height: '100%',
      flex: 1
    }
})