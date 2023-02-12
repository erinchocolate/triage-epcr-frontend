import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import HomepageFooter from './HomepageFooter';
import HomepageHeader from './HomepageHeader';
export default function Homepage({changeView}) {
  return (
    <View style={styles.container}>
      <HomepageHeader changeView={changeView}/>
      <View style={styles.layout} />
      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.squareButton}>
          <Text style={{textAlign: 'center'}}>Patient Connect</Text>
        </TouchableOpacity>
      <View style={styles.space} />
        <TouchableOpacity onPress={()=>changeView('incident')} style={styles.squareButton}>
          <Text style={{textAlign: 'center'}}>Electronic Patient Care Record</Text>
        </TouchableOpacity>
      </View>  */}
      <HomepageFooter changeView={changeView}/>
      
      </View>
    )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 20
  },
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.58,
    width: '100%',
    backgroundColor: '#9dc8e2', 
  }, 
});



  // const styles = StyleSheet.create({
  //   container: {
  //       flexDirection: 'row',
  //       width: '130%',
  //       height: '130%',
  //       backgroundColor: '#4BAFEB',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       paddingBottom: 100
     
  //   },
  //   space: {
  //       width: 260, // or whatever size you need
  //       height: 20,
  //     },

  //     squareButton: {
  //       width: 200,
  //       height:200,
  //       backgroundColor: '#00FF00',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       borderRadius: 10,
  //       padding: 10
  //     },


  // });