import React, { Component } from 'react';
import Home from './HomeComponent';
import GearDirectory from './GearDirectoryComponent';
import GearInfo from './GearInfoComponent';
import InstructorDirectory from './InstructorDirectoryComponent';
import InstructorInfo from './InstructorInfoComponent';
import MusicianDirectory from './MusicianDirectoryComponent';
import MusicianInfo from './MusicianInfoComponent';
import GigDirectory from './GigDirectoryComponent';
import GigInfo from './GigInfoComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import Contact from './ContactComponent';
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

const InstructorDirectoryNavigator = createStackNavigator(
    {
        InstructorDirectory: { 
                screen: InstructorDirectory,
                navigationOptions: ({navigation}) => ({
                    headerLeft: <Icon
                        name='mortar-board'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />    
                })
             },
        InstructorInfo: { screen: InstructorInfo }
    },
    {
        initialRouteName: 'InstructorDirectory',
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

const MusicianDirectoryNavigator = createStackNavigator(
    {
        MusicianDirectory: { 
                screen: MusicianDirectory,
                navigationOptions: ({navigation}) => ({
                    headerLeft: <Icon
                        name='music'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />    
                })
             },
        MusicianInfo: { screen: MusicianInfo }
    },
    {
        initialRouteName: 'MusicianDirectory',
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

const GigDirectoryNavigator = createStackNavigator(
    {
        GigDirectory: { 
                screen: GigDirectory,
                navigationOptions: ({navigation}) => ({
                    headerLeft: <Icon
                        name='microphone'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />    
                })
             },
        GigInfo: { screen: GigInfo }
    },
    {
        initialRouteName: 'GigDirectory',
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

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
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
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions : ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#16425b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                    name='address-card'
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
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
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
                drawerLabel: 'Browse Gear',
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
         InstructorDirectory: { 
            screen: InstructorDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Instructors',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='mortar-board'
                        type='font-awesome'
                        size={20}
                        color={tintColor}
                    />
                )
            }
         },
         MusicianDirectory: { 
            screen: MusicianDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Musicians',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='music'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
         },
         GigDirectory: { 
            screen: GigDirectoryNavigator,
            navigationOptions: {
                drawerLabel: 'Gigs',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='microphone'
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
                        size={23}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: { 
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => ( 
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
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
        backgroundColor: '#16425B',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
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