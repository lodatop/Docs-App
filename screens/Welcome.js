import React from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';

import { KoroSteps, KoroButton, Wrapper } from 'rn-koro-lib';

const Welcome = (props) => {

    let { onDone } = props

    let step1 = (
        <View style={styles.stepContainer}>
            <Text style={{fontSize: 50, textAlign: 'center', marginBottom: 40}}>
                Welcome to Koro Lib
            </Text>
            <Text style={{fontSize: 25, textAlign: 'justify', marginBottom: 30}}>
                Koro lib is a customised components library for React Native
            </Text>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
                Continue to install library
            </Text>
        </View>
    )

    let step2 = (
        <View style={{...styles.stepContainer}}>
            <View style={{flexDirection: 'row', marginBottom: 30, flexWrap: 'wrap'}}>
                <Text style={{fontWeight: "700", fontSize: 20}}>First: </Text>
                <Text style={{fontSize: 20, marginLeft: 15}}>Open your terminal and go to your proyect's path</Text>
            </View>
            <View style={{marginBottom: 30, flexWrap: 'wrap'}}>
                <Text style={{fontWeight: "700", fontSize: 20}}>Second: </Text>
                <Text style={{fontSize: 20, marginLeft: 15}}>Copy in the command line</Text>
                <View style={{flexDirection: 'row', paddingLeft: 30}}>
                    <Text style={{fontSize: 20}}>{'\u2022'}</Text>
                    <Text style={{fontSize: 20}}>  C:\proyectPath> npm install rn-koro-lib --save</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20, flexWrap: 'wrap'}}>
                <Text style={{fontWeight: "700", fontSize: 20}}>Lastly: </Text>
                <Text style={{fontSize: 20, marginLeft: 15}}>Go to the next step and start using Koro Lib!</Text>
            </View>
        </View>
    )

    let step3 = (
        <View style={{...styles.stepContainer, padding: 20, backgroundColor: 'lightgrey'}}>
                <Text>import React from 'react';</Text>
                <Text>import {'{'} View, Text, StyleSheet {'}'} from 'react-native';</Text>
                <Text>import {'{'} KoroButton {'}'} from 'rn-koro-lib';</Text>
                <Text style={{marginVertical: 10}}>{'export default function App() {'}</Text>
                <Text style={{marginLeft: 15}}>{'return ('}</Text>
                <Text style={{marginLeft: 30}}>{'<View style={styles.container}>'}</Text>
                <Text style={{marginLeft: 45}}>{'<KoroButton title="Press Me!" />'}</Text>
                <Text style={{marginLeft: 30}}>{'</View>'}</Text>
                <Text style={{marginLeft: 15}}>{');'}</Text>
                <Text style={{marginVertical: 10}}>{'}'}</Text>
                <Text>const styles = StyleSheet.create({'{'}</Text>
                <Text style={{marginLeft: 15}}>container: {'{'}</Text>
                <Text style={{marginLeft: 30}}>flex: 1,</Text>
                <Text style={{marginLeft: 30}}>backgroundColor: '#fff',</Text>
                <Text style={{marginLeft: 30}}>alignItems: 'center',</Text>
                <Text style={{marginLeft: 30}}>justifyContent: 'center',</Text>
                <Text style={{marginLeft: 15}}>},</Text>
                <Text style={{marginLeft: 15}}>button:{'{'}</Text>
                <Text style={{marginLeft: 30}}>width: '40%',</Text>
                <Text style={{marginLeft: 30}}>alignSelf: 'center'</Text>
                <Text style={{marginLeft: 15}}>{'}'}</Text>
                <Text>});</Text>
                <KoroButton title="Press Me!" buttonStyle={styles.button}/>
            </View>
    );

    let step4 = (
        <View style={{...styles.stepContainer, padding: 20}}>
            <Text style={{fontSize: 50, textAlign: 'center', marginBottom: 40}}>You're done!!</Text>
            <Text style={{fontSize: 25, textAlign: 'center', padding: 20}}>
                Press Done and explore the other components!
            </Text>
        </View>
        )

    let steps = [
        step1, 
        step2, 
        step3,
        step4
    ]

    return (
        <KoroSteps 
            steps={steps}
            onDone={onDone}
        />
    )
}

const styles = StyleSheet.create({
    stepContainer: {
        padding: 40,
        width: '100%',
        height: '100%',
    },
    button:{
        width: '40%',
        alignSelf: 'center',
        marginTop: 20
    }
})

export default Welcome