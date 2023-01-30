import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from './Checkbox';

export default function IvPage() { 

    const [location, setLocation] = useState('');
    const [units, setUnits] = useState('');
    const [allIV, setAllIV] = useState([]);

    const [openSize, setOpenSize] = useState(false);
    const[valueSize, setValueSize] = useState(null);

    const [openLocation, setOpenLocation] = useState(false);
    const[valueLocation, setValueLocation] = useState(null);

    function addIV(){
        setAllIV(prevAllIV=>{
            const IVRowKey = uuid.v4();
            return [...prevAllIV, {IVRowId: IVRowKey, IVSize: units, IVLocation: location}]
        })
    }

    function deleteIV(IVRowId){
        setAllIV(prevAllIV=>{
            return (
                prevAllIV.filter(existingIV=>existingIV.IVRowId != IVRowId)
            )
        })
        
    }


    return(
<View style={styles.layout}>


<View style={styles.container}>

        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>IO</Text>
        </View>

        <View style={styles.checkboxGroup}>
        <CheckBox/>
        <Text>IV</Text>
        </View>
        
</View>


<View style={[styles.container, { zIndex: 4}]}>
     <View style={styles.smallDropdown}>
        <DropDownPicker 
         open={openSize}
         value={valueSize}
         setOpen={setOpenSize}
         setValue={setValueSize}
         onChangeValue={units=>setUnits(units)}
         placeholder='Size'
        items = {[
            {label: '16g', value: '16g'},
            {label: '18g', value: '18g'},
            {label: '20g', value: '20g'},
            {label: '22g', value: '22g'},
            {label: '24g', value: '24g'},
            {label: '15mm', value:'15mm'},
            {label: '25mm', value: '25mm'},
            {label: '45mm', value: '45mm'},
            ]}
        />
        </View>
       
        <View style={styles.largeDropdown}>
        <DropDownPicker 
         open={openLocation}
         value={valueLocation}
         setOpen={setOpenLocation}
         setValue={setValueLocation}
         onChangeValue={location=>setLocation(location)}
         placeholder='Location'
        items = {[
            {label: 'Left Forearm/Hand', value: 'Left Forearm/Hand'},
            {label: 'Right Forearm/Hand', value: 'Right Forearm/Hand'},
            {label: 'Left ACF', value: 'Left ACF'},
            {label: 'Right ACF', value: 'Right ACF'},
            {label: 'Left Lower Limb', value: 'Left Lower Limb'},
            {label: 'Right Lower Limb', value: 'Right Lower Limb'},
            {label: 'Left External Jugular', value: 'Left External Jugular'},
            {label: 'Right External Jugular', value: 'Right External Jugular'},
            {label: 'Left Tibia', value: 'Left Tibia'},
            {label: 'Right Tibia', value: 'Right Tibia'},
            {label: 'Left Shoulder', value: 'Left Shoulder'},
            {label: 'Right Shoulder', value: 'Right Shoulder'},
            {label: 'Other', value: 'Other'},
            ]}
        />
        </View>

        <TouchableOpacity onPress={()=>addIV()} style={styles.button}>
            <Text style={styles.text}>Add</Text>
        </TouchableOpacity>  
       
  </View>
        
  

  

  <View style={styles.container}>
        <View style={styles.scrollcontent}>
                <ScrollView style = {styles.scrollbox}>
            
                {allIV.map(singleIV=>{

                return(
                <View key={singleIV.IVRowId} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '97%', zIndex:-1}}>

                    <View style={styles.IVBox}><Text  style={styles.IVText}>{singleIV.IVSize} {singleIV.IVLocation}</Text></View>
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
      backgroundColor: "dodgerblue",
    },

  
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        
    
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

      scrollcontent: {
        zIndex: -1,
        
      },

      scrollbox:{
        zIndex: -1,
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
      marginRight: '20%',
     
       
    },

    IVBox:{
       
        marginTop: 20,
        width: '85%',
        height: '60%',
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
        width: '5%',
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
