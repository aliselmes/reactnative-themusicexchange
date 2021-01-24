import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        musicians: state.musicians
    };
};

class MusicianDirectory extends Component {

    static navigationOptions = {
        title: 'Musicians'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderMusician = ({item}) => { 
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.location}
                    onPress={() => navigate('MusicianInfo', { musicianId: item.id})}
                />
            );
        }

        return (
            <FlatList
                data={this.props.musicians.musicians}
                renderItem={renderMusician}
                keyExtractor={item => item.id.toString()} 
            />
        );
    }
}

export default connect(mapStateToProps)(MusicianDirectory); 