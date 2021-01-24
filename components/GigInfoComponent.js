import React, { Component } from 'react';
import { Text, View, Modal, Button, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { Card, Icon, Input} from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        gigs: state.gigs,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: gigId => (postFavorite(gigId))
};

function RenderGig(props) {

    const { item } = props;

    const shareItem = (title, message, url) => {
        Share.share({
            title: title,
            message: `${title}: ${message} ${url}`,
            url: url
        },{
            dialogTitle: 'Share ' + title
        });
    };

    if (item) {
        return (
            <Card 
                title={item.venue}
            >
                <Text style={{margin: 10, fontWeight: 'bold'}}>{item.location}</Text>
                <Text style={{margin: 10}}>{item.date}</Text>
                <Text style={{margin: 10}}>{item.time}</Text>
                <Text style={{margin: 10}}>{item.details}</Text>
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
                    <Icon
                            name={'share'}
                            type='font-awesome'
                            color='#3A7CA5'
                            raised
                            reverse
                            onPress={() => shareItem(item.venue, item.location, item.date, item.time, item.details)} 
                        />
                </View>
            </Card>
        );
    }
    return <View />;
}

class GigInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            message: ''
        }; 
    }
    static navigationOptions = {
        title: 'Gig Information'
    }

    markFavorite(gigId) {
        this.props.postFavorite(gigId);
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
        
        const gigId = this.props.navigation.getParam('gigId');
        const item = this.props.gigs.gigs.filter(item => item.id === gigId)[0];
        return (
            <ScrollView>
                <RenderGig item={item}
                    favorite={this.props.favorites.includes(gigId)}
                    markFavorite={() => this.markFavorite(mgigId)}
                    onShowModal={() => this.toggleModal()}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>Message Musician</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(GigInfo);  