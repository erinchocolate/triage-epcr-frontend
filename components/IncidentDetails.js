import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Checkbox from '../utility/DropDown';

export default function IncidentDetails() {

    const [open, setOpen] = useState(false);
    const[value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Option 1', value: 'O1'},
        {label: 'Option 2', value: 'O2'},
        {label: 'Option 3', value: 'O3'}
    ]);

    
 
    return (
    <View style={styles.layout}>
        <Text>Wow, look! A Dropbox!</Text>
        <Checkbox 
                placeholder = 'MyPlaceholder'
                items = {[{label: 'Option 1', value: '1'},
                {label: 'Option 2', value: '2'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '58%',
        width: '40%',
        backgroundColor: 'white'
    }
})