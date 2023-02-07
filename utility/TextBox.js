import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useState } from 'react';

export default function TextBox({time, setAllIv, IVRowId }) { 

    const timestamp = new Date().toLocaleString();
    const [text, setText] = useState( time || timestamp);


    return (
          <TextInput
                style={styles.input}
                value={text}
                onChangeText={text=>{
                    setText(text);
                    setAllIv(prevAllIv=>{
                        return(
                        prevAllIv.map(existingIV=>{
                            if(existingIV.IVRowId===IVRowId){
                                return({...existingIV, IVTime: text})
                            }
                            return existingIV;
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
        marginLeft: 20,
        height: '50%',
        width:'43%',
        borderWidth: 1,
        backgroundColor: "white",
        margin: 12,
        padding:10,
    },
  });

