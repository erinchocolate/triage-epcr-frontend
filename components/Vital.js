import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { createContext, useState } from 'react';
import CheckBox from '../utility/Checkbox';
import DropDown from '../utility/DropDown';

import DropDownPicker from 'react-native-dropdown-picker';

export default function Vital({vitalSigns, setVitalSigns}) {


    //for timestamp
  
      
  
    //Text Input data
        const [BP, setBP] = useState(vitalSigns.BP || '');
       // const [Resptime, setResptime] = useState(vitalSigns.Resptime || null);
        const [heartRate, setheartRate] = useState(vitalSigns.heartRate || '');
        const [respRate, setRespRate] = useState(vitalSigns.respRate || '');
        const [temp, setTemp] = useState(vitalSigns.temp || '');
        const [BSL, setBSL] = useState(vitalSigns.BSL || '');
        const [SPo2, setSPo2] = useState(vitalSigns.SPo2 || '');
        const [ETCo2, setETCo2] = useState(vitalSigns.ETCo2 || '');

    //CheckBox Data
        const [monitor, setMonitor] = useState(vitalSigns.monitor || false);
        const [manual, setManual] = useState(vitalSigns.manual || false);
        const [palpatation, setPalpatation] = useState(vitalSigns.palpatation || false);

    //DropDown Data
        const [GSCtotal, setGSCtotal] = useState(vitalSigns.GSCtotal || null);
        const [eyes, setEyes] = useState(vitalSigns.eyes || '');
        const [voice, setVoice] = useState(vitalSigns.voice || null);
        const [motor, setMotor] = useState(vitalSigns.motor || null);
        const [fourLead, setFourLead] = useState(vitalSigns.fourLead || null);
        const [twelveLead, setTwelveLead] = useState(vitalSigns.twelveLead || null);

    //Values for GSC
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [result, setResult] = useState(0);

    //to set dropdown values to values above
    const handleValueChange = (value, setter) => {
        setter(value);
        setResult(value1 + value2 + value3 );
      };

      //For the first dropbox
      const [open, setOpen] = useState(false);
      const[value, setValue] = useState(null);

      //For the second dropbox
      const [openSec, setOpenSec] = useState(false);
      const[valueSec, setValueSec] = useState(null);

      //For the third dropbox
      const [openThird, setOpenThird] = useState(false);
      const[valueThird, setValueThird] = useState(null);

  return (
    <View style={styles.layout}>
        <View style = {styles.column}>
        <View style={styles.row}>

        <TouchableOpacity style={[styles.box, {backgroundColor: '#a9a9a9'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>BP: </Text>
                </View>

                <TextInput
                    value={BP}
                    onChangeText={BP=>{
                        setBP(BP);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, BP: BP}))}}
                    placeholder={'BP'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
          
            <View style={styles.row}>
            <TouchableOpacity style={[styles.box, {backgroundColor: '#a9a9a9'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>Heart Rate: </Text>
                </View>
                <TextInput
                    value={heartRate}
                    onChangeText={heartRate=>{
                        setheartRate(heartRate);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, heartRate: heartRate}))}}
                    placeholder={'Heart Rate'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
      <TouchableOpacity style={[styles.box, { backgroundColor: '#a9a9a9' }]} />
      <View style={styles.title}>
        <Text style={styles.myText}>Resp Rate: </Text>
      </View>
      
    




                <TextInput
                    value={respRate}
                    onChangeText={respRate=>{
                        setRespRate(respRate);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, respRate: respRate}))}}
                    placeholder={'Set Resp Rate'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
          
            </View>
           
            <View style={styles.row}>
            <TouchableOpacity style={[styles.box, {backgroundColor: '#9dc8e2'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>Temp: </Text>
                </View>
                <TextInput
                    value={temp}
                    onChangeText={temp=>{
                        setTemp(temp);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, temp: temp}))}}
                    placeholder={'Temp'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
            <TouchableOpacity style={[styles.box, {backgroundColor: '#9dc8e2'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>BSL: </Text>
                </View>
                <TextInput
                    value={BSL}
                    onChangeText={BSL=>{
                        setBSL(BSL);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, BSL: BSL}))}}
                    placeholder={'BSL'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
            <TouchableOpacity style={[styles.box, {backgroundColor: '#a9a9a9'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>SPo2: </Text>
                </View>
                <TextInput
                    value={SPo2}
                    onChangeText={SPo2=>{
                        setSPo2(SPo2);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, SPo2: SPo2}))}}
                    placeholder={'SPo2'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
            <TouchableOpacity style={[styles.box, {backgroundColor: '#a9a9a9'}]}></TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.myText}>ETCo2: </Text>
                </View>
                <TextInput
                    value={ETCo2}
                    onChangeText={ETCo2=>{
                        setETCo2(ETCo2);
                        setVitalSigns(prevIncidentDetails=>({...prevIncidentDetails, ETCo2: ETCo2}))}}
                    placeholder={'ETCo2'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
        </View>
    <View style={styles.middleColumn}>
        <View style={styles.row4}>
            <CheckBox
                isChecked={monitor}
                setChecked={monitor=>{
                    setMonitor(monitor);
                    setVitalSigns(prevVitalSigns=>({...prevVitalSigns, monitor: monitor}))}}/>
        
                <Text>Monitor</Text>

             <CheckBox
                isChecked={manual}
                setChecked={manual=>{
                    setManual(manual);
                    setVitalSigns(prevVitalSigns=>({...prevVitalSigns, manual: manual}))}}/>
                <Text>Manual</Text>

            <CheckBox
                isChecked={palpatation}
                setChecked={palpatation=>{
                    setPalpatation(palpatation);
                    setVitalSigns(prevVitalSigns=>({...prevVitalSigns, palpatation: palpatation}))}}/>
                <Text>Palpatation</Text>

                </View>

                <View style={styles.row4}>
                    
            <TouchableOpacity style={styles.button2}>
                 <Text>Connect Corpuls</Text>   
             </TouchableOpacity>
             </View>
</View>

      
      
        
        <View style={styles.wideColumn}>
            <View style={[styles.row5,{zIndex:5}]}>
                <View style={styles.title2}>
                    <Text style={styles.myText}>GCS: </Text>
                    
                </View>


                <View style={styles.smallDropdown1}> 

                <DropDownPicker 
                    open={open}
                    value={value}
                    setOpen={setOpen}
                    setValue={setValue}
                    selectedValue={value1}
                    onChangeValue={(value) => handleValueChange(value, setValue1)}
                    placeholder='Eyes'
                    items = {[
                        {label: '1- No Response', value: 1},
                        {label: '2- Response to Pain', value: 2},
                        {label: '3- Response to Voice', value: 3},
                        {label: '4- Spontaneous', value: 4},
      
                ]}
                    />
                        </View>
           
            <View style={styles.smallDropdown2}> 
            <DropDownPicker 
                    open={openSec}
                    value={valueSec}
                    setOpen={setOpenSec}
                    setValue={setValueSec}
                    selectedValue={value2}
                    onChangeValue={(value) => handleValueChange(value, setValue2)}
                    placeholder='Voice'
                    items = {[
                        {label: '1- No response', value: 1},
                        {label: '2- Incomprehensible', value: 2},
                        {label: '3- Innappropriate', value: 3},
                        {label: '4- Confused', value: 4},
                        {label: '5- Orientated', value: 5},
      
                ]}
                    />

            </View>
          
            
            <View style={styles.smallDropdown3}> 

            <DropDownPicker 
                    open={openThird}
                    value={valueThird}
                    setOpen={setOpenThird}
                    setValue={setValueThird}
                    selectedValue={value3}
                    onChangeValue={(value) => handleValueChange(value, setValue3)}
                    placeholder = 'Motor'
                    items = {[
                      {label: '1- No Response', value: 1},
                      {label: '2- Extension', value: 2},
                      {label: '3- Flexion', value: 3},
                      {label: '4- WithDrawn', value: 4},
                      {label: '4- Purposeful', value: 5},
                      {label: '4- Obeys Commands', value: 6},
                      
                    ]}
                    />

            </View>

          
      </View>
      <Text>Result: {result}</Text>
          
            <View style={[styles.row5,{zIndex:4}]}>
            <View style={styles.title}>
                    <Text style={styles.myText}>4 Lead ECG or Pads</Text>
            </View>
            
            <View style={styles.longDropDown2}> 
            <DropDown
                value={fourLead}
                setValue={fourLead=>{
                    setFourLead(fourLead);
                    setVitalSigns(prevVitalSigns=>({...prevVitalSigns, fourLead: fourLead}))}}

            placeholder = 'Sinus Rhythm'
            items = {[
              {label: '1- Sinus Rhythm', value: 'sinusRhythm'},
              {label: '2- Sinus BradyCardia', value: 'sinusBradyCardia'},
              {label: '3- Sinus Tachycardia', value: 'sinusTachycardia'},
              {label: '4- Atrial Fibrilation', value: 'atrialFibrilation'},
              {label: '5- Artrial Flutter', value: 'artrialFlutter'},
              {label: '6- Ventricular Fibrilation', value: 'ventricularFibrilation'},
              {label: '7- Ventricular Tachycardia', value: 'ventricularTachycardia'},
              {label: '8- STEMI', value: 'STEMI'},
              {label: '9- Non STEMI', value: 'NonSTEMI'},
              {label: '10- Undiagnosed', value: 'Undiagnosed'},
            ]}
            />
           
            </View>
            
        </View>
        <View style={[styles.row5,{zIndex:2}]}>
            <View style={styles.title}>
                    <Text style={styles.myText}>12 Lead ECG</Text>
            </View>
            
            <View style={styles.longDropDown1}> 
            <DropDown
                value={twelveLead}
                setValue={twelveLead=>{
                    setTwelveLead(twelveLead);
                    setVitalSigns(prevVitalSigns=>({...prevVitalSigns, twelveLead: twelveLead}))}}

          placeholder = 'Sinus Rhythm'
          items = {[
            {label: '1- Sinus Rhythm', value: 'sinusRhythm'},
            {label: '2- Sinus BradyCardia', value: 'sinusBradyCardia'},
            {label: '3- Sinus Tachycardia', value: 'sinusTachycardia'},
            {label: '4- Atrial Fibrilation', value: 'atrialFibrilation'},
            {label: '5- Artrial Flutter', value: 'artrialFlutter'},
            {label: '6- Ventricular Fibrilation', value: 'ventricularFibrilation'},
            {label: '7- Ventricular Tachycardia', value: 'ventricularTachycardia'},
            {label: '8- STEMI', value: 'STEMI'},
            {label: '9- Non STEMI', value: 'NonSTEMI'},
            {label: '10- Undiagnosed', value: 'Undiagnosed'},
          ]}
          />
         
           
            </View>
            
        </View>
        <View style={styles.row}>
        </View>
        </View>
    </View>
  )
}

const commonStyle = {
        borderColor: '#3b3b3b',
        borderWidth: 1,
        width: '30%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        backgroundColor: '9dc8e2'
}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * 0.58,
        width: '100%',
        backgroundColor: '#9dc8e2',  
        fontWeight: '700'
    },
    column:{
        height: '100%',
        width: '25%',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',      
    },
    middleColumn:{
        flexDirection: 'column',
      height: '100%',
      width: '20%',
      fontWeight: '700',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wideColumn:{
        
        height: '100%',
        width: '50%',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent:'center',
    },
    row:{
        flexDirection: 'row',
        width: '70%',
        height: '13%',
        
        justifyContent: 'center',
        alignItems: 'center',
   
    },
    row2:{
        flexDirection: 'row',
        width: '90%',
        height: '30%',
        fontWeight: '700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row3:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
        fontWeight: '700',
        justifyContent:'center',
        alignItems: 'center',
   
    },
    row4:{
        flexDirection: 'row',
        width: '70%',
        height: '20%',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '43%',
        
    },
    row5:{
        flexDirection: 'row',
        width: '70%',
        height: '20%',
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center'
       
    },
  
      smallDropdown1:{
      
        height: '20%',
        width: '27%',
        zIndex:6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
      },
      smallDropdown2:{
        marginRight: 5,
        height: '25%',
        width: '27%',
        zIndex:5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      smallDropdown3:{
       
        height: '20%',
        width: '27%',
        zIndex:4,
        justifyContent: 'center',
        alignItems: 'center'
      },
      longDropDown1: {
        height: '20%',
        width: '40%',
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center'
  
      },
      longDropDown2: {
        height: '20%',
        width: '40%',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
  
      },
    title:{
        ...commonStyle,
        width: '45%',
        backgroundColor: 'white'
    },
    title2:{
        ...commonStyle,
        width: '20%',
        backgroundColor: 'white'
    },
    smallTitle:{
        ...commonStyle,
        width: '1%'
    },
    smallInput:{
        ...commonStyle,
        width: '17%',
        paddingLeft: 10,
        backgroundColor: 'white'
    },
   
 
  
 
    input:{
        ...commonStyle,
        paddingLeft: 10,
        width: '47%',
        backgroundColor: 'white'

    },
    wideInput:{
        ...commonStyle,
        width: '54%',
        paddingLeft: 10,
    },
    button:{
        ...commonStyle,
        width: '50%',
        height: '80%',
        backgroundColor: '#93ff33',
      
    },

    button1:{
        ...commonStyle,
        width: '50%',
        height: '70%',
        backgroundColor: '#a9a9a9',
      
    },
    button2:{
        ...commonStyle,
        width: '80%',
        height: '80%',
        backgroundColor: '#93ff33',
      
    },
    box: {
        width: 20,
        height:20,
        color: '#93ff33',
    },
})