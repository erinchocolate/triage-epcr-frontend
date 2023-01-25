import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header(){
    return(
        <View style={styles.layout}>
            <Button title='Button 1' style={styles.button} />
            <Button title='Button 2' />
            <Button title='Button 3' />
            <Button title='Button 4' />
            <Button title='Button 5'/>
            <Button title='Button 6'/>
            <Button title='Button 7'/>
            <Button title='Button 8'/>
            <Button title='Button 9'/>
            <Button title='Button 10'/>
        </View>
    )
}

const styles = ()=> StyleSheet.create({
    layout:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button:{
    }
})

