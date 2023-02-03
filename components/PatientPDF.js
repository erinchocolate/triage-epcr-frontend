import { StyleSheet, View, Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import PDFFooter from './PDFFooter';

export default function PatientPDF({changeView, incidentDetails, patientInfo, assTransInfo, vitalSigns}) {

  //PDF Data Collection - Incident Details
  const {notifyT: notified = 'Not Specified', responseT: responded = 'Not Specified', locatedT: located = 'Not Specified',
          departedT: departed = 'Not Specified', destinationT: destinationT = 'Not Specified', location = 'Not Specified'} = incidentDetails;
  const {destination = 'Not Specified'} = assTransInfo;

  //PDF Data Collection - Patient Info
  const {fName: fName = 'Not Specified', mName: mName = 'Not Specified', lName: lName = 'Not Specified',
        address: address = 'Not Specified', nhiNo: nhiNo = 'Not Specified', dob: dob = 'Not Specified', 
        age: age='Not Specified', gender: gender='Not Specified', medications: medications = 'Not Specified',
        allergies: allergies = 'Not Specified'} = patientInfo;
  
  //PDF Data Collection - Treatment
  const {BP: BP = 'Not Specified', heartRate: heartRate = 'Not Specified', respRate: respRate = 'Not Specified',
         temp: temp = 'Not Specified', BSL: BSL = 'Not Specified', ETCo2: ETCo2 = 'Not Specified',
         SPo2: SPo2 = 'Not Specified'} = vitalSigns;


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
              h3{
                margin-right: 5%
              }
            </style>
          
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
                       <h2 class='title'>Destination</h2> <h3> ${destination}</h3>
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
                </body>`
  return (
    <>
      <WebView 
      originWhitelist={['*']}
      source={{ html: pdf }}     
      style={{ height:"100%", width:"100%" }}
      />
      <PDFFooter
        changeView={changeView}/>
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