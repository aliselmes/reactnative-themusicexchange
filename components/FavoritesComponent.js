import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        items: state.items,
        favorites: state.favorites
    };
};

class Favorites extends Component {

    static navigationOptions = {
        title: 'My Favorites'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderFavoriteItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('GearInfo', {itemId: item.id})} 
                />
            );
        };

        if (this.props.items.isLoading) {
            return <Loading />;
        }
        if (this.props.items.errMess) {
            return (
                <View>
                    <Text>{this.props.items.errMess}</Text>
                </View>
            );
        }
        return (
            <FlatList
                data={this.props.items.items.filter(
                    item => this.props.favorites.includes(item.id)
                )}
                renderItem={renderFavoriteItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Favorites);