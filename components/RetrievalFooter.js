import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';


export default function RetrievalFooter({changeView, print, share}) {
  return (
    <View style={styles.layout}>
        <TouchableOpacity onPress={()=>changeView('incident')} style={styles.button}>
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles =StyleSheet.create({
    layout:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        backgroundColor: 'dodgerblue'
    },
    image: {
      width: 120,
      height: 100,
      resizeMode: 'contain'
    },
    button:{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      width: '13%'
}})
