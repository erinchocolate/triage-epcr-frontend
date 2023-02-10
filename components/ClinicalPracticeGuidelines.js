import WebView from 'react-native-webview';
import { StyleSheet, Dimensions, View } from 'react-native';
import WebPage from '../utility/WebPage';

export default function ClinicalPracticeGuidelines() {
  return (
    <View style={styles.layout}>
      <WebPage/>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.58,
    width: '100%',
    backgroundColor: '#9dc8e2',
  },
});