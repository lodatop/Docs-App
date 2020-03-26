import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';

import { KoroSteps } from 'rn-koro-lib' ;

const Welcome = (props) => {

    let step1 = (
        <View>
            <Text>
                im step number 1
            </Text>
        </View>
    )

    let step2 = (
        <View>
            <Text>
                im step number 2
            </Text>
        </View>
    )

    let step3 = (
        <View>
            <Text>
                im step number 3
            </Text>
        </View>
    )

    let steps = [
        step1, 
        step2, 
        step3,
    ]

    return (
        <KoroSteps 
            steps={steps}
            onDone={() => Alert.alert('Done steps')}
        />
    )
}

export default Welcome