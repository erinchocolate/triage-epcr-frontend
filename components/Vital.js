import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { createContext, useState } from 'react';
import CheckBox from '../utility/Checkbox';
import DropDown from '../utility/DropDown';


export default function Vital() {

        const [heartRate, setheartRate] = useState('');
        const [RespRate, setRespRate] = useState('');
        const [Temp, setTemp] = useState('');
        const [BSL, setBSL] = useState('');
        const [SPo2, setSPo2] = useState('');
        const [ETCo2, setETCo2] = useState('');
       

  return (
    <View style={styles.layout}>
        <View style = {styles.column}>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Heart Rate: </Text>
                </View>
                <TextInput
                    value={heartRate}
                    onChangeText={heartRate=>setheartRate(heartRate)}
                    placeholder={'Heart Rate'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Resp Rate: </Text>
                </View>
                <TextInput
                    value={RespRate}
                    onChangeText={RespRate=>setRespRate(RespRate)}
                    placeholder={'Set Resp Rate'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>Temp: </Text>
                </View>
                <TextInput
                    value={Temp}
                    onChangeText={Temp=>setTemp(Temp)}
                    placeholder={'Temp'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>BSL: </Text>
                </View>
                <TextInput
                    value={BSL}
                    onChangeText={BSL=>setBSL(BSL)}
                    placeholder={'BSL'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>SPo2: </Text>
                </View>
                <TextInput
                    value={SPo2}
                    onChangeText={SPo2=>setSPo2(SPo2)}
                    placeholder={'SPo2'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
            <View style={styles.row}>
                <View style={styles.title}>
                    <Text style={styles.myText}>ETCo2: </Text>
                </View>
                <TextInput
                    value={ETCo2}
                    onChangeText={ETCo2=>setETCo2(ETCo2)}
                    placeholder={'ETCo2'}
                    placeholderTextColor = '#b3b3b3'
                    style={styles.input}/>
            </View>
        </View>
    <View style={styles.middleColumn}>
        <View style={styles.row}>
            <CheckBox/>
        
                <Text>Monitor</Text>

             <CheckBox/>
                <Text>Manual</Text>

            <CheckBox/>
                <Text>Palpatation</Text>
        
       </View>
    <View style={styles.row}>
    
       
            <TouchableOpacity style={styles.button2}>
                 <Text>Connect Corpuls</Text>
                 
                 
             </TouchableOpacity>
      
    
    </View>
</View>

      
      
                
     
       
        

        <View style={styles.wideColumn}>
            <View style={[styles.row,{zIndex:5}]}>
                <View style={styles.title}>
                    <Text style={styles.myText}>GCS: </Text>
                </View>
                <View style={styles.smallDropdown1}> 
                    <DropDown
                         placeholder = 'Eyes'
                             items = {[
                                {label: '1- No Response', value: 'noResponse'},
                                {label: '2- Response to Pain', value: 'responseToPain'},
                                {label: '3- Response to Voice', value: 'responseToVoice'},
                                {label: '4- Spontaneous', value: 'spontaneous'},
              
            ]}
            />
                        </View>
           
            <View style={styles.smallDropdown2}> 
            <DropDown
            placeholder = 'Voice'
            items = {[
              {label: '1- No Response', value: 'noResponse'},
              {label: '2- Incomprehensible', value: 'Incomprehensible'},
              {label: '3- Innappropriate', value: 'Innappropriate'},
              {label: '4- Confused', value: 'Confused'},
              {label: '5- Orientated', value: 'Orientated'},
              
            ]}
            
            />
            </View>
          
            
            <View style={styles.smallDropdown3}> 
            <DropDown
            placeholder = 'Motor'
            items = {[
              {label: '1- No Response', value: 'noResponse'},
              {label: '2- Extension', value: 'extension'},
              {label: '3- Flexion', value: 'flexion'},
              {label: '4- WithDrawn', value: 'withdrawn'},
              {label: '4- Purposeful', value: 'purposeful'},
              {label: '4- Obeys Commands', value: 'obeysCommands'},
              
            ]}
            />
           
            </View>
      </View>

          
            <View style={[styles.row2,{zIndex:4}]}>
            <View style={styles.title}>
                    <Text style={styles.myText}>4 Lead ECG or Pads</Text>
            </View>
            
            <View style={styles.longDropDown2}> 
            <DropDown
            placeholder = 'Sinus Rhythem'
            items = {[
              {label: '1- Sinus Rhythem', value: 'sinusRhythem'},
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
        <View style={[styles.row2,{zIndex:2}]}>
            <View style={styles.title}>
                    <Text style={styles.myText}>12 Lead ECG</Text>
            </View>
            
            <View style={styles.longDropDown1}> 
            <DropDown
          placeholder = 'Sinus Rhythem'
          items = {[
            {label: '1- Sinus Rhythem', value: 'sinusRhythem'},
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
           
            <TouchableOpacity style={styles.button1}>
                             <Text>Take Photo</Text>
        </TouchableOpacity>
           
          
        </View>
        
        <TouchableOpacity style={styles.button}>
            <Text>Save</Text>
        </TouchableOpacity>
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
        height: '58%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
        fontWeight: '700'
    },
    column:{
        height: '90%',
        width: '33%',
        fontWeight: '700'
    },
    middleColumn:{
        flexDirection: 'column',
      height: '90%',
      width: '30%',
      fontWeight: '700'
    },
    wideColumn:{
        height: '90%',
        width: '36%',
        marginRight: 10,
        fontWeight: '700'
    },
    row:{
        flexDirection: 'row',
        width: '90%',
        height: '20%',
        fontWeight: '700'
    },
    row2:{
        flexDirection: 'row',
        width: '90%',
        height: '30%',
        fontWeight: '700'
    },
  

      smallDropdown1:{
      
        height: '20%',
        width: '25%',
        zIndex:6,
      },
      smallDropdown2:{
       
        height: '20%',
        width: '25%',
        zIndex:5,
      },
      smallDropdown3:{
       
        height: '20%',
        width: '25%',
        zIndex:4,
      },
      longDropDown1: {
        height: '20%',
        width: '40%',
        zIndex: 2,
  
      },
      longDropDown2: {
        height: '20%',
        width: '40%',
        zIndex: 1,
  
      },
    title:{
        ...commonStyle
    },
    smallTitle:{
        ...commonStyle,
        width: '13%'
    },
    smallInput:{
        ...commonStyle,
        width: '17%',
        paddingLeft: 10
    },
   
 
  
 
    input:{
        ...commonStyle,
        paddingLeft: 10,
        width: '65%'
    },
    wideInput:{
        ...commonStyle,
        width: '54%',
        paddingLeft: 10,
    },
    button:{
        ...commonStyle,
        width: '50%',
        height: '20%',
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
        width: '50%',
        height: '50%',
        backgroundColor: '#93ff33',
      
    },
   
})