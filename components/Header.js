import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity  } from 'react-native';

export default function Header(){
    return(
        <View style={styles.layout}>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>B</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>E</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>F</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>G</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>H</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>I</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={styles.myText}>J</Text>
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
        height: '40%',
        width: '100%',
        backgroundColor: 'dodgerblue'
    },
    item:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        height: '25%',
        width: '20%'
    }
})

