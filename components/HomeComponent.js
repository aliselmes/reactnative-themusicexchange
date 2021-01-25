import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { GIGS } from '../shared/gigs';
import { MUSICIANS } from '../shared/musicians';
import { ITEMS } from '../shared/items';
import { INSTRUCTORS } from '../shared/instructors';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        items: state.items,
        musicians: state.musicians,
        instructors: state.instructors,
        gigs: state.gigs
    };
};

function RenderItem(props) {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return(
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10, alignSelf: 'center'}}>{`${item.location} - $${item.price} - Condition:${item.used}`}</Text>
            </Card>
        );
    }
    return <View />;
}

function RenderMusician(props) {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return(
            <Card title={item.title} >
                <Text style={{margin: 10, alignSelf: 'center'}}>{item.location}</Text>
                <Text style={{margin: 10}}>{item.message}</Text>
            </Card>
        );
    }
    return <View />; 
}

function RenderInstructor(props) {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return(
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10, alignSelf: 'center'}}>{`${item.location} - ${item.instrument}`}</Text>
            </Card>
        );
    }
    return <View />;
}

function RenderGig(props) {
    const { item } = props;
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return(
            <Card title={item.venue} >
                <Text style={{margin: 10, alignSelf: 'center'}}>{item.location}</Text>
                <Text style={{margin: 10, alignSelf: 'center'}}>{`${item.date} - ${item.time}`}</Text>
                <Text style={{margin: 10, alignSelf: 'center'}}>{item.details}</Text>
            </Card>
        );
    }
    return <View />;
}



class Home extends Component {

    static navigationOptions = { 
        title: 'The Music Exchange'
    }

    render() {
        return (
            <ScrollView>
                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20, color: '#2F6690'}}>Buy. Sell. Trade. Locally.</Text>
                <RenderItem 
                    item={this.props.items.items.filter(item => item.featured)[0]}
                    isLoading={this.props.items.isLoading}
                    errMess={this.props.items.errMess} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20, color: '#2F6690'}}>Find Musicians Near You</Text>
                <RenderMusician 
                    item={this.props.musicians.musicians.filter(musician => musician.featured)[0]}
                    isLoading={this.props.musicians.isLoading}
                    errMess={this.props.musicians.errMess}/>

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20, color: '#2F6690'}}>Learn with Local Instructors </Text>
                <RenderInstructor 
                    item={this.props.instructors.instructors.filter(instructor => instructor.featured)[0]}
                    isLoading={this.props.instructors.isLoading}
                    errMess={this.props.instructors.errMess} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20, color: '#2F6690'}}>Play Local Venues </Text>
                <RenderGig 
                    item={this.props.gigs.gigs.filter(gig => gig.featured)[0]}
                    isLoading={this.props.gigs.isLoading}
                    errMess={this.props.gigs.errMess} />

            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home); 