import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function DropDown(props) {
    const [open, setOpen] = useState(false);


  return (
        <DropDownPicker 
        open={open}
        value={props.value}
        items={props.items}
        setOpen={setOpen}
        setValue={props.setValue}
        placeholder={props.placeholder}
        placeholderStyle ={{color: '#3b3b3b'}}
        style={{ width: '100%', minHeight: '100%'}}
        />
  )
}

