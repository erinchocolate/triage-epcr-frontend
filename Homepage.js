import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Homepage() {
    return (
      <View style={styles.container}>


    <TouchableOpacity style={styles.squareButton}>
    <Text style={{textAlign: 'center'}}>Patient Connect</Text>
    </TouchableOpacity>

    <View style={styles.space} />

    <TouchableOpacity style={styles.squareButton}>
    <Text style={{textAlign: 'center'}}>Electronic Patient Care Record</Text>
    </TouchableOpacity>

        </View>
     
    )
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
    space: {
        width: 120, // or whatever size you need
        height: 20,
      },

      squareButton: {
        width: 120,
        height:120,
        backgroundColor: '#00FF00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },


  });