import React, { Component } from 'react';
import { Text, View, Modal, Button, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { Card, Icon, Input} from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        items: state.items,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: itemId => (postFavorite(itemId))
};

function RenderGearItem(props) {

    const { item } = props;

    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10, fontWeight: 'bold'}}>${item.price}</Text>
                <Text style={{margin: 10}}>{item.location}</Text>
                <Text style={{margin: 10}}>Condition: {item.used}</Text>
                {item.trade ? <Text style={{margin: 10, color: 'green'}}>Trades Accepted</Text> : <Text style={{margin: 10, color: 'red'}}>No Trades</Text>}
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
                <View style={styles.cardRow}>
                    <Icon 
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#81C3D7'
                        raised
                        reverse
                        onPress={() => props.favorite ?
                            console.log('Already set as a favorite') : props.markFavorite()} 
                    />
                    <Icon
                        name='pencil'
                        type='font-awesome'
                        color='#16425B'
                        raised
                        reverse
                        onPress={() => props.onShowModal()}
                    />
                </View>
            </Card>
        );
    }
    return <View />;
}

class GearInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            message: ''
        };
    }
    static navigationOptions = {
        title: 'Item Information'
    }

    markFavorite(itemId) {
        this.props.postFavorite(itemId);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleSubmit() {
        Alert.alert(
            'Message Sent!',
            `Your Name: ${this.state.name} \n\nMessage: ${this.state.message}`,
            [
                {
                    text: 'OK',
                    onPress: () => this.resetForm() 
                }
            ],
            { cancelable: false }    
        );
    }

    resetForm() {
        this.setState({
            showModal: false,
            name: '',
            message: ''
        })
    }

    render () {
        
        const itemId = this.props.navigation.getParam('itemId');
        const item = this.props.items.items.filter(item => item.id === itemId)[0];
        return (
            <ScrollView>
                <RenderGearItem item={item}
                    favorite={this.props.favorites.includes(itemId)}
                    markFavorite={() => this.markFavorite(itemId)}
                    onShowModal={() => this.toggleModal()}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>Message Seller</Text>
                        <Input
                            placeholder='Your Name'
                            leftIcon = {<Icon name='user-o' type='font-awesome'/>}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={name => this.setState({name: name})} 
                            value={this.state.name}
                        />
                        <Input
                            placeholder='Your Message'
                            leftIcon = {<Icon name='comment-o' type='font-awesome'/>}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={message => this.setState({message: message})} 
                            value={this.state.message}
                        />
                        <View style={{margin: 10}}>
                            <Button 
                                title='Send'
                                color='#16425B'
                                onPress={() => {
                                    this.toggleModal();
                                    this.handleSubmit();
                                }} />
                        </View>
                        <View style={{margin: 10}}>
                            <Button 
                                onPress={() => {
                                    this.toggleModal();
                                }} 
                                color='#808080'
                                title='Cancel' />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GearInfo);  