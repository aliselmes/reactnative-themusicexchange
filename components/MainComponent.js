import React, { Component } from 'react';
import Home from './HomeComponent';
import GearDirectory from './GearDirectoryComponent';
import GearInfo from './GearInfoComponent';
import Favorites from './FavoritesComponent';
import { View, Platform, StyleSheet, Text, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchItems, fetchMusicians, fetchInstructors, fetchGigs } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchItems,
    fetchMusicians,
    fetchInstructors,
    fetchGigs
};

const GearDirectoryNavigator = createStackNavigator(
    {
        GearDirectory: { 
                screen: GearDirectory,
                navigationOptions: ({navigation}) => ({
                    headerLeft: <Icon
                        name='list'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />    
                })
             },
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#16425b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='home'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    /> 
        })
    }

);


const FavoritesNavigator = createStackNavigator (
    {
        Favorites: { screen: Favorites }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#16425b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='heart'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    /> 
        })
    }

);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View>
                    <Text style={styles.drawerHeaderText}>The Music Exchange</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
        GearDirectory: { 
            screen: GearDirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
         Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'Saved Items',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#D9DCD6',
        contentComponent: CustomDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    componentDidMount() {
        this.props.fetchItems();
        this.props.fetchMusicians();
        this.props.fetchInstructors();
        this.props.fetchGigs();
    }

    render() {
        return(
            <View style={{flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#2F6690',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#D9DCD6',
        fontSize: 24,
        fontWeight: 'bold',
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff', 
        fontSize: 24
    }
});

export default connect(null, mapDispatchToProps)(Main); 