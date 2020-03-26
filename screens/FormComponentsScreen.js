import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KoroCard, KoroInput, KoroCollapse, KoroButton } from 'rn-koro-lib'

export const FormComponentsScreen = (props) => {

    const [input, setInput] = useState('')

    const Header = () => (
        <View>
          <Text style={styles.title}>input</Text>
        </View>
      );
      
        
      const inputCode = '<KoroInput label="label" onChange={(text) => doSomething(text)} />'

      const Footer = () => (
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


    return(
        <View>
            <KoroCard header={Header} footer={Footer}>
                <View>
                    <KoroInput label='Label' onChange={(text) => setInput(text)}/>
                    <KoroButton title="Print value" onPress={() => alert(input)} buttonStyle={{backgroundColor: 'blue', minWidth: 200}} textStyle={{color: 'white'}} />
                </View>
            </KoroCard>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})