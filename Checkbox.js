import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function Checkboxes() { 
    const [isChecked, setChecked] = useState(false);

    return(
    <View style={styles.container}>
         <Checkbox 
            style={styles.checkbox}
            color={isChecked? "#00FF00": undefined}
            value={isChecked} onValueChange={setChecked} 
         />
        <Text>Option</Text>

    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#4BAFEB',
        alignItems: 'center',
        justifyContent: 'center',
    
    },

    checkbox: {
        margin: 8
    },
  });