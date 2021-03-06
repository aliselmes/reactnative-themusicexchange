import React, { Component } from 'react';
import { Text, View, Modal, Button, StyleSheet, Alert, ScrollView, Share } from 'react-native';
import { Card, Icon, Input} from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        instructors: state.instructors,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: instructorId => (postFavorite(instructorId))
};

function RenderInstructor(props) {

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
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10, fontWeight: 'bold'}}>{item.instrument}</Text>
                <Text style={{margin: 10}}>{item.location}</Text>
                <Text style={{margin: 10}}>Rate: ${item.rate}/hour</Text>
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
                    <Icon
                            name={'share'}
                            type='font-awesome'
                            color='#3A7CA5'
                            raised
                            reverse
                            onPress={() => shareItem(item.name, item.description, baseUrl + item.image)} 
                        />
                </View>
            </Card>
        );
    }
    return <View />;
}

class InstructorInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            message: ''
        };
    }
    static navigationOptions = {
        title: 'Instructor Information'
    }

    markFavorite(instructorId) {
        this.props.postFavorite(instructorId);
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
        
        const instructorId = this.props.navigation.getParam('instructorId');
        const item = this.props.instructors.instructors.filter(item => item.id === instructorId)[0];
        return (
            <ScrollView>
                <RenderInstructor item={item}
                    favorite={this.props.favorites.includes(instructorId)}
                    markFavorite={() => this.markFavorite(instructorId)}
                    onShowModal={() => this.toggleModal()}
                />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text style={{alignSelf: 'center', fontSize: 20, marginBottom: 20, fontWeight: 'bold'}}>Message Instructor</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(InstructorInfo);  