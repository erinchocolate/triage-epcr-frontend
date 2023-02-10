import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '../utility/Checkbox';
import TextBox from '../utility/TextBox';


export function IvPage({interventions, setInterventions, allIv, setAllIv}) { 

    const [io, setIo] = useState(interventions.io || false);
    const [iv, setIv] = useState(interventions.iv || false);
    const [npa, setNpa] = useState(interventions.npa || false);

    //For IO info
    const [locationIO, setLocationIO] = useState('');
    const [unitsIO, setUnitsIO] = useState('');
    const [openSizeIO, setOpenSizeIO] = useState(false);
    const[valueSizeIO, setValueSizeIO] = useState(null);
    const [openLocationIO, setOpenLocationIO] = useState(false);
    const[valueLocationIO, setValueLocationIO] = useState(null);

    //For NPA info
    const [unitsNPA, setUnitsNPA] = useState('');
    const [openSizeNPA, setOpenSizeNPA] = useState(false);
    const[valueSizeNPA, setValueSizeNPA] = useState(null);

    //For IV info
    const [locationIV, setLocationIV] = useState('');
    const [unitsIV, setUnitsIV] = useState('');
    const [openSizeIV, setOpenSizeIV] = useState(false);
    const[valueSizeIV, setValueSizeIV] = useState(null);
    const [openLocationIV, setOpenLocationIV] = useState(false);
    const[valueLocationIV, setValueLocationIV] = useState(null);

    const timestamp = new Date().toLocaleString();



    function addIV(){
        setAllIv(prevAllIv=>{
            const IVRowKey = uuid.v4();
            return [...prevAllIv, {IVRowId: IVRowKey, IVSize: unitsIV, IVLocation: locationIV, IVTime: timestamp, IVType: 'IV'}]
        })
    }

    function addIO(){
        setAllIv(prevAllIv=>{
            const IVRowKey = uuid.v4();
            return [...prevAllIv, {IVRowId: IVRowKey, IVSize: unitsIO, IVLocation: locationIO, IVTime: timestamp, IVType: 'IO'}]
        })
    }

    function addNPA(){
        setAllIv(prevAllIv=>{
            const IVRowKey = uuid.v4();
            return [...prevAllIv, {IVRowId: IVRowKey, IVSize: unitsNPA, IVTime: timestamp, IVType: 'NPA'}]
        })
    }

    function deleteIV(IVRowId){
        setAllIv(prevAllIv=>{
            return (
                prevAllIv.filter(existingIV=>existingIV.IVRowId != IVRowId)
            )
        })
    }

return(
    <View style={styles.layout}>

       

        <View style={[styles.container, { zIndex: 5}]}>

        <View style={styles.checkboxGroup}>
                    <CheckBox
                        isChecked={iv}
                        setChecked={iv=>{
                        setIv(iv);
                        setInterventions(prevInterventions=>({...prevInterventions, iv: iv}))}}/>
                    <Text>IV</Text>
         </View>
         <View style={styles.smallDropdown}>
                    <DropDownPicker 
                    open={openSizeIV}
                    value={valueSizeIV}
                    setOpen={setOpenSizeIV}
                    setValue={setValueSizeIV}
                    onChangeValue={unitsIV=>setUnitsIV(unitsIV)}
                    placeholder='Size'
                    items = {[
                        {label: '16G', value: '16G'},
                        {label: '18G', value: '18G'},
                        {label: '20G', value: '20G'},
                        {label: '22G', value: '22G'},
                        {label: '24G', value: '24G'},
                       
                        ]}
                    />
        </View>

        <View style={styles.largeDropdown}>
                    <DropDownPicker 
                    open={openLocationIV}
                    value={valueLocationIV}
                    setOpen={setOpenLocationIV}
                    setValue={setValueLocationIV}
                    onChangeValue={locationIV=>setLocationIV(locationIV)}
                    placeholder='Location'
                    items = {[
                        {label: 'Left Forearm/Hand', value: 'Left Forearm/Hand'},
                        {label: 'Right Forearm/Hand', value: 'Right Forearm/Hand'},
                        {label: 'Left ACF', value: 'Left ACF'},
                        {label: 'Right ACF', value: 'Right ACF'},
                        {label: 'Left External Jugular', value: 'Left External Jugular'},
                        {label: 'Right External Jugular', value: 'Right External Jugular'},
                        ]}
                    />
                    </View>
                    <TouchableOpacity onPress={()=>addIV()} style={styles.button}>
                        <Text style={styles.text}>Add</Text>
                    </TouchableOpacity> 
            
            </View> 



            <View style={[styles.container, { zIndex: 4}]}>
                 <View style={styles.checkboxGroup}>
                    <CheckBox
                        isChecked={io}
                        setChecked={io=>{
                        setIo(io);
                        setInterventions(prevInterventions=>({...prevInterventions, io: io}))}}/>
                    <Text>IO</Text>
                    </View>
                <View style={styles.smallDropdown}>
                    <DropDownPicker 
                    open={openSizeIO}
                    value={valueSizeIO}
                    setOpen={setOpenSizeIO}
                    setValue={setValueSizeIO}
                    onChangeValue={units=>setUnitsIO(units)}
                    placeholder='Size'
                    items = {[
                        {label: '15mm', value:'15mm'},
                        {label: '25mm', value: '25mm'},
                        {label: '45mm', value: '45mm'},
                        ]}
                    />
                    </View>
                
                    <View style={styles.largeDropdown}>
                    <DropDownPicker 
                    open={openLocationIO}
                    value={valueLocationIO}
                    setOpen={setOpenLocationIO}
                    setValue={setValueLocationIO}
                    onChangeValue={location=>setLocationIO(location)}
                    placeholder='Location'
                    items = {[
                        {label: 'Left Proximal Tibia', value: 'Left Proximal Tibia'},
                        {label: 'Right Proximal Tibia', value: 'RightProximal Tibia'},
                        {label: 'Left Tibia', value: 'Left Tibia'},
                        {label: 'Right Tibia', value: 'Right Tibia'},
                        {label: 'Left Shoulder', value: 'Left Shoulder'},
                        {label: 'Right Shoulder', value: 'Right Shoulder'},
                        {label: 'Other', value: 'Other'},
                        ]}
                    />
                    </View>

                    <TouchableOpacity onPress={()=>addIO()} style={styles.button}>
                        <Text style={styles.text}>Add</Text>
                    </TouchableOpacity>  
                
            </View>     

            <View style={[styles.container, { zIndex: 3}]}>  
        <View style={styles.checkboxGroup}>
            <CheckBox
              isChecked={npa}
              setChecked={npa=>{
              setNpa(npa);
              setInterventions(prevInterventions=>({...prevInterventions, npa: npa}))}}/>
             <Text>NPA</Text>
        </View>

        <View style={styles.singleDropdown}>
                    <DropDownPicker 
                    open={openSizeNPA}
                    value={valueSizeNPA}
                    setOpen={setOpenSizeNPA}
                    setValue={setValueSizeNPA}
                    onChangeValue={unitsNPA=>setUnitsNPA(unitsNPA)}
                    placeholder='Size'
                    items = {[
                        {label: '6.5', value: '6.5'},
                        {label: '7.5', value: '7.5'},
                        {label: '8.5', value: '8.5'},
                       
                        ]}
                    />
        </View>
        <TouchableOpacity onPress={()=>addNPA()} style={styles.button}>
                        <Text style={styles.text}>Add</Text>
                    </TouchableOpacity>  

        </View> 

            

            <View style={styles.container}>
                    <View>
                            <ScrollView>
                         
                            {allIv.map(singleIV=>{
                            return(
                            <View key={singleIV.IVRowId} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '78%', zIndex:-1, marginLeft: '10%'}}> 
                                <TextBox
                                    time={singleIV.IVTime}
                                    setAllIv={setAllIv}
                                    IVRowId={singleIV.IVRowId}/> 
                                <View style={styles.multipleIntBox}><Text  style={styles.IVText}> {singleIV.IVType} {singleIV.IVSize} {singleIV.IVLocation}</Text></View>
                                <TouchableOpacity style={styles.deleteButton} onPress={()=>deleteIV(singleIV.IVRowId)} ><Text>X</Text></TouchableOpacity>
                            </View>
                            )
                            })}
                            </ScrollView>

                </View>


                </View>

            </View>

    )

}

const styles = StyleSheet.create({
    layout: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '40%',
        width: '100%',
        backgroundColor: '#9dc8e2',  
        
      },
  
    
      container: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginRight: 20
      
      
        },
  
        smallDropdown: {
          width: '30%',
          margin:10,
          zIndex: 3,
      
        },
      
        largeDropdown: {
          width: '40%',
          zIndex: 999,
          margin:10,
          
        },

        singleDropdown:{
            width: '30%',
          margin:10,
          zIndex: 3,
          marginRight: '45%',
          marginLeft: 0
        },
  
       
  
  
      button: {
          backgroundColor: "#EBEBEB",
          borderRadius: 10,
          borderWidth: 1,
          width: '10%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
         
          
     
        },
  
        checkboxGroup:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10,
       
       
         
      },
  
      multipleIntBox:{
          marginTop: 20,
          width: '60%',
          height: '80%',
          borderColor: '#3b3b3b',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          margin: 10,
          backgroundColor: 'white'
      },
  
      
  
      deleteButton:{
          width: '8%',
          height: '65%',
          backgroundColor: '#FF5C5C',
          borderColor: '#3b3b3b',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop: 10,
          backgroundColor: 'white'
      },


    

      
});