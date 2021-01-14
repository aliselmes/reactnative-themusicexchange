import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

function RenderGearItem(props) {

    const { item } = props;

    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                featuredSubtitle={`$${item.price} - ${item.location}`}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10}}>Condition: {item.used}</Text>
                {item.trade ? <Text style={{margin: 10, color: 'green'}}>Trades Accepted</Text> : <Text style={{margin: 10, color: 'red'}}>No Trades</Text>}
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
                <Icon 
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#81C3D7'
                    raised
                    reverse
                    onPress={() => props.favorite ?
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class GearInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            favorite: false
        };
    }

    static navigationOptions = {
        title: 'Item Information'
    }

    markFavorite() {
        this.setState({favorite: true})
    }

    render () {
        
        const itemId = this.props.navigation.getParam('itemId');
        const item = this.props.items.items.filter(item => item.id === itemId)[0];
        return <RenderGearItem item={item}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />;
    }
}

export default connect(mapStateToProps)(GearInfo); 