import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default function HomepageHeader({ changeView }) {
  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={()=>changeView('homepage')} style={styles.button}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  layout:{
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'row',
      height: '24%',
      width: '100%',
      backgroundColor: 'dodgerblue'
  },
  button:{
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      height: '24%',
      width: '20%'
  }
})