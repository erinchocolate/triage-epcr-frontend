import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Button, View, SafeAreaView,Image } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: "orange", flex: 0.55 }}></View>

      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  }
});

