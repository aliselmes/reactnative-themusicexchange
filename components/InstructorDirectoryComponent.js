import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        instructors: state.instructors
    };
};

class InstructorDirectory extends Component {

    static navigationOptions = {
        title: 'Instructors'
    }

    render () {
        const { navigate } = this.props.navigation;
        const renderInstructor = ({item}) => { 
            return (
                <ListItem
                    title={item.name}
                    subtitle={`${item.instrument} - ${item.location}`}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                    onPress={() => navigate('InstructorInfo', { instructorId: item.id})}
                />
            );
        }

        return (
            <FlatList
                data={this.props.instructors.instructors}
                renderItem={renderInstructor}
                keyExtractor={item => item.id.toString()} 
            />
        );
    }
}

export default connect(mapStateToProps)(InstructorDirectory); 