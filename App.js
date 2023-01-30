import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Intervention from './components/Intervention';
import Assessment from './components/assessment';

export default function App() {
  const save = [];
  function saveData(argument){
    save.push(argument);
    console.log(save);
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.middle}>
         <Intervention />
      </View>
      <Footer/>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: StatusBar.currentHeight
  },
  middle:{
    justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '58%',
        width: '100%',
        backgroundColor: 'white'
  }
});

