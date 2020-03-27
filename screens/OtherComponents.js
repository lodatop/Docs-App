import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KoroCard, KoroCollapse, KoroTable, KoroIcon, KoroChip, KoroInput, KoroButton } from 'rn-koro-lib'
import { ScrollView } from 'react-native-gesture-handler';

export const OtherComponentsScreen = (props) => {

    const [value, setValue] = useState('')
    const [chips, setChips] = useState([])
    const [counter, setCounter] = useState(0)

    const addChip = () => {
        setChips([...chips, {title: value, id: counter}])
        setCounter(counter+1);
        setValue('')
    }

    const removeChip = (id) => {
        setChips(
          chips.filter(
            chip => chip.id !== id
        )
        )
    }
    const chipCode = "<KoroChip tags={chips} onDelete={(id) => removeChip(id)} />"


    return(
        <View>
            <ScrollView>
                <View style={{padding: 10, justifyContent: 'center'}}>
                    <Text style={{alignSelf: 'center'}}>Enter values in the input to add a chip</Text>
                    <View style={{flexWrap: 'wrap', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <KoroInput style={{width: '70%'}} label='select a name please' value={value} onChange={(value) => setValue(value)} />
                    <KoroButton
                        title='+' 
                        textStyle={{color: 'white', fontSize: 40, padding: 0}} 
                        buttonStyle={{width: 10, padding: 0, paddingBottom: 5}}
                        onPress={addChip}/>
                    </View>
                    <KoroChip
                        tags={chips}
                        onDelete={(id) => removeChip(id)}
                        />
                    <KoroCollapse title='Show code'>
                        <View style={[{backgroundColor: 'LightGrey'}]}>
                            <Text> {chipCode} </Text>
                            <Text> tags: an array of objects representing each chip</Text>
                            <Text> onDelete: function to be exectuted when a chip is deleted </Text>
                        </View>
                    </KoroCollapse>
                </View>
            </ScrollView>
        </View>
    )
}

OtherComponentsScreen.navigationOptions = {
    headerTitle: 'Other Components'
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})