import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'

import { Wrapper } from '../hoc/Wrapper'
import { KoroCard, KoroButton } from 'rn-koro-lib'

export const Home = (props) => {

    const globalHeader = () => (
        <View>
          <Text style={styles.title}>Global Components</Text>
        </View>
    );
    const globalFooter = () => (
        <View>
          <KoroButton 
            title='Go to page' 
            buttonStyle={{width: 200, alignSelf: 'center'}}
            onPress={() => {props.navigation.navigate({routeName: 'GlobalComponentsPage'})}}/>
        </View>
    );

    const infoHeader = () => (
        <View>
          <Text style={styles.title}>Information Components</Text>
        </View>
    );
    const infoFooter = () => (
        <View>
          <KoroButton 
            title='Go to page' 
            buttonStyle={{width: 200, alignSelf: 'center'}}
            onPress={() => {props.navigation.navigate({routeName: 'InfoComponentsPage'})}}/>
        </View>
    );

    const formHeader = () => (
        <View>
          <Text style={styles.title}>Forms Components</Text>
        </View>
    );
    const formFooter = () => (
        <View>
          <KoroButton 
            title='Go to page' 
            buttonStyle={{width: 200, alignSelf: 'center'}}
            onPress={() => {props.navigation.navigate({routeName: 'FormsComponentsPage'})}}/>
        </View>
    );

    const otherHeader = () => (
        <View>
          <Text style={styles.title}>Other Components</Text>
        </View>
    );
    const otherFooter = () => (
        <View>
          <KoroButton 
            title='Go to page' 
            buttonStyle={{width: 200, alignSelf: 'center'}}
            onPress={() => {props.navigation.navigate({routeName: 'OtherComponentsPage'})}}/>
        </View>
    );
    return (
        <Wrapper>
            <ScrollView>
                <View>
                    <KoroCard header={globalHeader} footer={globalFooter}>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Badge</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Icon</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Table</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Card</Text>
                        </View>
                    </KoroCard>
                </View>
                <View>
                    <KoroCard header={infoHeader} footer={infoFooter}>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Alert</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Modal</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Toast</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Popover</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Progress</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Steps</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Collapse</Text>
                        </View>
                    </KoroCard>
                </View>
                <View>
                    <KoroCard header={formHeader} footer={formFooter}>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Input</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Form</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Select</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Dropdown</Text>
                        </View>
                    </KoroCard>
                </View>
                <View>
                    <KoroCard header={otherHeader} footer={otherFooter}>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Chips</Text>
                        </View>
                        <View style={{flexDirection: 'row', paddingLeft: 30}}>
                            <Text style={{fontSize: 15}}>{'\u2022'}</Text>
                            <Text style={{fontSize: 15}}>  Button</Text>
                        </View>
                    </KoroCard>
                </View>
            </ScrollView>
        </Wrapper>
    )
}

Home.navigationOptions = {
    headerTitle: 'Koro Library'
}

const styles = StyleSheet.create({

})