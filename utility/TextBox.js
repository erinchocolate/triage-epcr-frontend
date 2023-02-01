import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { useState } from 'react';

export default function TextBox() { 

    const timestamp = new Date().toLocaleString();
    const [text, onChangeText] = useState(timestamp);


    return (
          <TextInput
                style={styles.input}
                value={text}
                onChangeText={onChangeText}     
            />

    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        height: '53%',
        width:'40%',
        borderWidth: 1,
        backgroundColor: "white",
        margin: 12,
        padding:10,
    },
  });

