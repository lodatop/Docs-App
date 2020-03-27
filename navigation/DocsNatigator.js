import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'

import { GlobalComponentsScreen } from '../screens/GlobalComponentsScreen'
import { InfoComponentsScreen } from '../screens/InfoComponentsScreen'
import { FormComponentsScreen } from '../screens/FormComponentsScreen'
import { createAppContainer } from 'react-navigation';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';
import { OtherComponentsScreen } from '../screens/OtherComponents';

const DocsNavigator = createStackNavigator({
    Welcome: Welcome,
    Home:  Home,
    FormsComponentsPage: FormComponentsScreen,
    GlobalComponentsPage: GlobalComponentsScreen,
    InfoComponentsPage: InfoComponentsScreen,
    OtherComponentsPage: OtherComponentsScreen
});

export default createAppContainer(DocsNavigator)