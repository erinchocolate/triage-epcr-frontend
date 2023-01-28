import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function DropDown(props) {
    const [open, setOpen] = useState(false);
    const[value, setValue] = useState(null);


  return (
    <View style={styles.dropdown}>
        <DropDownPicker 
        open={open}
        value={value}
        items={props.items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={props.placeholder}
        style={{height: '39%'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    minHeight: '100%'
  }
})
