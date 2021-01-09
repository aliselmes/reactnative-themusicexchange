import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { ITEMS } from '../shared/items';

function RenderGearItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                featuredSubtitle={`$${item.price} - ${item.location}`}
                image={require('./images/taylor.jpg')}
            >
                <Text style={{margin: 10}}>Condition: {item.used}</Text>
                {item.trade ? <Text style={{margin: 10, color: 'green'}}>Trades Accepted</Text> : <Text style={{margin: 10, color: 'red'}}>No Trades</Text>}
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class GearInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'Item Information'
    }
    render () {

        const itemId = this.props.navigation.getParam('itemId');
        const item = this.state.items.filter(item => item.id === itemId)[0];
        return <RenderGearItem item={item} />;
    }
}

export default GearInfo; 