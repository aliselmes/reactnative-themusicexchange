import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

class GearDirectory extends Component {

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
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('GearInfo', { itemId: item.id})}
                />
            );
        }

        return (
            <FlatList
                data={this.props.items.items}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()} 
            />
        );
    }
}

export default connect(mapStateToProps)(GearDirectory); 