import { StatusBar  as ExpoStatus} from 'expo-status-bar';
import { StyleSheet, Text, View, Button, StatusBar, Platform } from 'react-native';
import Header from './components/Header';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.joshtext}>Josh is the best</Text>
      <ExpoStatus style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
  joshtext: {
    fontSize: 40
  }
});
