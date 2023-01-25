import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.middle}>
         <Text style={styles.joshtext}>Josh is the best</Text>
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
  joshtext: {
    fontSize: 40
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
