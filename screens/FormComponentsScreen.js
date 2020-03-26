import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KoroCard, KoroInput, KoroCollapse, KoroButton, KoroForm, KoroSelect, KoroDropdown } from 'rn-koro-lib'

export const FormComponentsScreen = (props) => {

    const [input, setInput] = useState('')
    const [form, setForm] = useState({})

    const inputHeader = () => (
        <View>
          <Text style={styles.title}>input</Text>
        </View>
    );

    const formHeader = () => (
        <View>
          <Text style={styles.title}>Form</Text>
        </View>
    );

    const selectHeader = () => (
        <View>
          <Text style={styles.title}>Select</Text>
        </View>
    );
    
    const dropdownHeader = () => (
        <View>
          <Text style={styles.title}>Dropdown</Text>
        </View>
    );  
        
    const inputCode = '<KoroInput label="label" onChange={(text) => doSomething(text)} />'

    const inputFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {inputCode} </Text>
                <Text> Props: </Text>
                <Text> Label: the label for the input. </Text>
                <Text> onChange: the function triggered when the input value is modified. </Text>
                <Text> Style: custom style for the input. </Text>
                <Text> Value: optional initial value for the input. </Text>
            </View>
        </KoroCollapse>
      );

      const formCode = '<KoroForm inputList={["input1", "input2"]} onChanges={(content) => doSomething(content)} />'

      const formFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {formCode} </Text>
                <Text> Props: </Text>
                <Text> inputList: an array of input labels for the form, the length is the quantity of inputs. </Text>
                <Text> onChanges: the function triggered when the input values in the form are modified. </Text>
                <Text> inputStyle: custom style for the inputs. </Text>
            </View>
        </KoroCollapse>
      );

      const selectCode = '<KoroSelect options={["optionOne","optionTwo","optionThree"]} onSelect={(selection) => doSomething(selection)}/>'

      const selectFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {selectCode} </Text>
                <Text> Props: </Text>
                <Text> options: an array of the options available to select. </Text>
                <Text> onSelect: the function triggered when an option is Selected. </Text>
                <Text> style: custom style for the select component. </Text>
            </View>
        </KoroCollapse>
      );

      const dropdownCode = '<KoroDropdown options={["optionOne","optionTwo","optionThree"]} onSelect={(selection) => doSomething(selection)}/>'

      const dropdownFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {dropdownCode} </Text>
                <Text> Props: </Text>
                <Text> options: an array of the options available to select. </Text>
                <Text> onSelect: the function triggered when an option is Selected. </Text>
                <Text> style: custom style for the select component. </Text>
            </View>
        </KoroCollapse>
      );

    return(
        <View>
            <KoroCard header={inputHeader} footer={inputFooter}>
                <View>
                    <KoroInput label='Label' onChange={(text) => setInput(text)}/>
                    <KoroButton title="Print value" onPress={() => alert(input)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                </View>
            </KoroCard>

            <KoroCard header={formHeader} footer={formFooter}>
                <View>
                    <KoroForm inputList={["input1", "input2"]} onChanges={(content) => setForm(content)} />
                    <KoroButton title="Print values" onPress={() => alert(form)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                </View>
            </KoroCard>

            <KoroCard header={selectHeader} footer={selectFooter}>
                <View>
                    <KoroSelect options={['one','two','three']} onSelect={(selection) => alert("Selected: " + selection)}/>
                </View>
            </KoroCard>

            <KoroCard header={dropdownHeader} footer={dropdownFooter}>
                <View>
                    <KoroDropdown options={['one','two','three']} onSelect={(selection) => alert("Selected: " + selection)}/>
                </View>
            </KoroCard>
        </View>
    )
}

FormComponentsScreen.navigationOptions = {
    headerTitle: 'Forms Components'
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})