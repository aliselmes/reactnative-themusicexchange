import React, { Component } from 'react';
import GearDirectory from './GearDirectoryComponent';
import GearInfo from './GearInfoComponent';
import { View } from 'react-native';
import { ITEMS } from '../shared/items';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            items: ITEMS,
            selectedItem: null
        };
    }

    onItemSelect(itemId) {
        this.setState({selectedItem: itemId});
    }

    render() {
        return(
            <View style={{flex: 1}}>
            <GearDirectory items={this.state.items} onPress={itemId => this.onItemSelect(itemId)}/>
            <GearInfo item={this.state.items.filter(item => item.id === this.state.selectedItem)[0]} />
            </View>
        );
    }
}

export default Main;