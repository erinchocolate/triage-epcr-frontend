import { StyleSheet, Text, TouchableOpacity, Button, View, SafeAreaView,Image} from 'react-native';
export default function Footer() {
  return (
    <View style={styles.component}>  
      <View style={styles.container} >
        <Image style={styles.image} source={require('../assets/st_john.png') }/>
        <Image style={styles.image} source={require('../assets/triage_logo.jpg')}/>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>EPCR Home</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Submit EPCR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Review EPCR</Text>
      </TouchableOpacity>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "dodgerblue",
    flex: 0.15,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    width: 200,
  },
  text: {
    margin: 10,
    color: "#3C3C3C",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    flex: 0.2,
    width: 100,
    height:100,
    resizeMode: 'contain'
  }
});