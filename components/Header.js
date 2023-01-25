import { StyleSheet, Text, TouchableOpacity, Button, View, SafeAreaView } from 'react-native';

export default function Header() {
  return (
  <View style={styles.component}>  
    <View style={styles.container} ><TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Home</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Incident Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Patient Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Vital Signs</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.container} ><TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Interventions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Procedures</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Medications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Assessment& Transport</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Clinical Practice Guidelines</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Tools</Text>
        </TouchableOpacity>  
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: "dodgerblue",
    flex: 0.35,
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
  }
});
