import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'

import { Wrapper } from '../hoc/Wrapper'
import { KoroCard, KoroButton } from 'rn-koro-lib'

export const Home = (props) => {

    const {goBack} = props;

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
            onPress={() => {props.navigation.navigate({routeName: 'FormsComponentPage'})}}/>
        </View>
    );
    return (
        <Wrapper>
            <View>
                <KoroCard header={globalHeader} footer={globalFooter}>
                        <Text>list of global components</Text>
                </KoroCard>
            </View>
            <View>
                <KoroCard header={infoHeader} footer={infoFooter}>
                        <Text>list of information components</Text>
                </KoroCard>
            </View>
            <View>
                <KoroCard header={formHeader} footer={formFooter}>
                        <Text>list of forms components</Text>
                </KoroCard>
            </View>
        </Wrapper>
    )
}

Home.navigationOptions = {
    headerTitle: 'Koro Library'
}

const styles = StyleSheet.create({

})