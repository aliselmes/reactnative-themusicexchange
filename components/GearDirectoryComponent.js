import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function GearDirectory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.location}
                leftAvatar={{source: require('./images/taylor.jpg')}}
                onPress={() => props.onPress(item.id)}
            />
        );
    }

    return (
        <FlatList
            data={props.items}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()} 
        />
    );
}

export default GearDirectory; 