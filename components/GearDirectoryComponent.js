import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ITEMS } from '../shared/items';

class GearDirectory extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'Browse Gear'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={` $${item.price} - ${item.location}`}
                    leftAvatar={{source: require('./images/taylor.jpg')}}
                    onPress={() => navigate('GearInfo', { itemId: item.id})}
                />
            );
        }

        return (
            <FlatList
                data={this.state.items}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()} 
            />
        );
    }
}

export default GearDirectory; 