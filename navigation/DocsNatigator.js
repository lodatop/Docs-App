import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'

import { GlobalComponentsScreen } from '../screens/GlobalComponentsScreen'
import { InfoComponentsScreen } from '../screens/InfoComponentsScreen'
import { FormComponentsScreen } from '../screens/FormComponentsScreen'
import { createAppContainer } from 'react-navigation';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';

const DocsNavigator = createStackNavigator({
    Welcome: Welcome,
    Home:  Home,
    FormsComponentPage: FormComponentsScreen,
    GlobalComponentsPage: GlobalComponentsScreen,
    InfoComponentsPage: InfoComponentsScreen
});

export default createAppContainer(DocsNavigator)