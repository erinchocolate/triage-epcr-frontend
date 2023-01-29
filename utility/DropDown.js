import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function DropDown(props) {
    const [open, setOpen] = useState(false);
    const[value, setValue] = useState(null);

  return (
        <DropDownPicker 
        open={open}
        value={value}
        items={props.items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={props.placeholder}
        placeholderStyle ={{color: '#3b3b3b'}}
        style={{ width: '100%', minHeight: '100%'}}
        />
  )
}
