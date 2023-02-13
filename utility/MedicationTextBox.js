import { StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';

export default function MedicationTextBox({time, setAllMedication, medicationRowID }) { 

    const timestamp = new Date().toLocaleString();
    const [text, setText] = useState( time || timestamp);

    return (
          <TextInput
                style={styles.input}
                value={text}
                onChangeText={text=>{
                    setText(text);
                    setAllMedication(prevAllMedication=>{
                        return(
                        prevAllMedication.map(existingMedication=>{
                            if(existingMedication.medicationRowID===medicationRowID){
                                return({...existingMedication, medicationTime: text})
                            }
                            return existingMedication;
                        })
                        )
                    }) 
                }}     
            />

    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginLeft: 10,
        height: '50%',
        width:'43%',
        borderWidth: 1,
        backgroundColor: "white",
        margin: 12,
        padding:10,
    },
  });

