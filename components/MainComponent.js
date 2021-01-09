import React, { Component } from 'react';
import Home from './HomeComponent';
import GearDirectory from './GearDirectoryComponent';
import GearInfo from './GearInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const GearDirectoryNavigator = createStackNavigator(
    {
        GearDirectory: { screen: GearDirectory },
        GearInfo: { screen: GearInfo }
    },
    {
        initialRouteName: 'GearDirectory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#16425b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator (
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#16425b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }

);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        GearDirectory: { screen: GearDirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#2F6690',
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return(
            <View style={{flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <AppNavigator />
            </View>
        );
    }
}

export default Main; 