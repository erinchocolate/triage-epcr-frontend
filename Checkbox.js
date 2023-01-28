import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


export default function CheckBox() { 
    const [isChecked, setChecked] = useState(false);

    return(
    <View style={styles.container}>
         <Checkbox 
            style={styles.checkbox}
            color={isChecked? "#00FF00": undefined}
            value={isChecked} onValueChange={setChecked} 
         />
      

    </View>
    );

}

const styles = StyleSheet.create({

    checkbox: {
        margin: 8
    },
  });