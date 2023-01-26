import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function DropDown(props) {
    const [open, setOpen] = useState(false);
    const[value, setValue] = useState(null);


  return (
    <View>
        <DropDownPicker 
        open={open}
        value={value}
        items={props.items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder={props.placeholder}/>
    </View>
  )
}
