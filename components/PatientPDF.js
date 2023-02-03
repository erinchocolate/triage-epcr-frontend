import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

export default function PatientPDF({incidentDetails, patientInfo, vitalSigns}) {

  const pdf = `<body>
                <center>
                  <h1>Incident Details</h1>
                </center>
                  <h2>Incident Id</h2>
                  <span style="display:flex;"><h2>Notified: </h2><h2>Responded: </h2><h2>Located: </h2></span>
                  <span style="display:flex;"><h2>Departed: </h2><h2>Destination: </h2></span>
                  <h2>Location: Location  Destination: Destination</h2>
                <hr>
                <center>
                  <h1>Patient Details</h1>
                </center>
                  <span style="display:flex;"><h2>First Name: ${patientInfo.fName} </h2><h2>Middle Name: </h2><h2>Surname: </h2></span>
                  <span style="display:flex;"><h2>Address: </h2></span>
                  <span style="display:flex;"><h2>NHI: </h2><h2>DOB: </h2><h2>Age: </h2></span>
                  <span style="display:flex;"><h2>Medications: </h2></span>
                  <span style="display:flex;"><h2>Allergies: </h2></span>
                <hr>
                <center>
                  <h1>Treatment</h1>
                </center>
                  <span style="display:flex;"><h2>Time Notified: </h2><h2>Responded Time: </h2><h2>Located Time: </h2></span>
                  <span style="display:flex;"><h2>BP: </h2><h2>HR: </h2><h2>RR: </h2><h2>Temp: </h2><h2>BSL: </h2><h2>SPo2: </h2><h2>ETCo2: </h2></span>
                </body>`
  return (
    <>
      <WebView 
      originWhitelist={['*']}
      source={{ html: pdf }}     
      style={{ height:"100%", width:"100%" }}
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