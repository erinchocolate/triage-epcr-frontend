import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { useState } from 'react';
import CheckBox from '../utility/Checkbox';

export default function Procedures({procedures, setProcedures}) {

    const [cardioversion, setCardioversion] = useState(procedures.cardioversion || false);
    const [pacing, setPacing] = useState(procedures.pacing || false);
    const [cardiacArrest, setCardiacArrest] = useState(procedures.cardiacArrest || false);
    const [rsi, setRsi] = useState(procedures.rsi || false);
    const [mechVent, setMechVent] = useState(procedures.mechVent || false);
    const [cpap, setCpap] = useState(procedures.cpap || false);
    const [cric, setCric] = useState(procedures.cric || false);
    const [needleDecomp, setNeedleDecomp] = useState(procedures.needleDecomp || false);
    const [fingerThorac, setFingerThorac] = useState(procedures.fingerThorac || false);
    const [fiBlock, setFiBlock] = useState(procedures.fiBlock || false);
     
    return (
    <View style={styles.layout}>
        
        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={cardioversion}
                    setChecked={cardioversion=>{
                        setCardioversion(cardioversion);
                        setProcedures(prevProcedures=>({...prevProcedures, cardioversion: cardioversion}))}}
                    />
                <Text style={styles.myText}>Cardioversion</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={pacing}
                    setChecked={pacing=>{
                        setPacing(pacing);
                        setProcedures(prevProcedures=>({...prevProcedures, pacing: pacing}))}}/>
                <Text style={styles.myText}>Pacing</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={cardiacArrest}
                    setChecked={cardiacArrest=>{
                        setCardiacArrest(cardiacArrest);
                        setProcedures(prevProcedures=>({...prevProcedures, cardiacArrest: cardiacArrest}))}}/>
                <Text style={styles.myText}>Cardiac Arrest</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Checklists</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={rsi}
                    setChecked={rsi=>{
                        setRsi(rsi);
                        setProcedures(prevProcedures=>({...prevProcedures, rsi: rsi}))}}/>
                <Text style={styles.myText}>RSI</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={mechVent}
                    setChecked={mechVent=>{
                        setMechVent(mechVent);
                        setProcedures(prevProcedures=>({...prevProcedures, mechVent: mechVent}))}}/>
                <Text style={styles.myText}>Mechanical Ventilation</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={cpap}
                    setChecked={cpap=>{
                        setCpap(cpap);
                        setProcedures(prevProcedures=>({...prevProcedures, cpap: cpap}))}}/>
                <Text style={styles.myText}>CPAP</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={cric}
                    setChecked={cric=>{
                        setCric(cric);
                        setProcedures(prevProcedures=>({...prevProcedures, cric: cric}))}}/>
                <Text style={styles.myText}>Surgical CRIC</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Cardiac Arrest Data Form</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={needleDecomp}
                    setChecked={needleDecomp=>{
                        setNeedleDecomp(needleDecomp);
                        setProcedures(prevProcedures=>({...prevProcedures, needleDecomp: needleDecomp}))}}/>
                <Text style={styles.myText}>Needle Decompression</Text>
            </View>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={fingerThorac}
                    setChecked={fingerThorac=>{
                        setFingerThorac(fingerThorac);
                        setProcedures(prevProcedures=>({...prevProcedures, fingerThorac: fingerThorac}))}}/>
                <Text style={styles.myText}>Finger Thoracostomy</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>RSI Data Form</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <View style={styles.checkboxGroup}>
                <CheckBox
                    isChecked={fiBlock}
                    setChecked={fiBlock=>{
                        setFiBlock(fiBlock);
                        setProcedures(prevProcedures=>({...prevProcedures, fiBlock: fiBlock}))}}/>
                <Text style={styles.myText}>FI Block</Text>
            </View>
            <TouchableOpacity style={styles.saveButton}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const buttonStyle = {
    borderColor: '#3b3b3b',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    marginLeft: 'auto'
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.6,
        width: '100%',
        backgroundColor: '#9dc8e2',  
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: '20%',
    },
    checkboxGroup:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: '4%'
    },
    myText:{
        fontSize: 20,
    },
    button:{
        ...buttonStyle,
        width: '20%',
        height: '60%',
        backgroundColor: 'dodgerblue',
    },
    saveButton:{
        ...buttonStyle,
        width: '30%',
        height: '60%',
        backgroundColor: '#93ff33'
    }
})