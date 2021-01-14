import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { GIGS } from '../shared/gigs';
import { MUSICIANS } from '../shared/musicians';
import { ITEMS } from '../shared/items';
import { INSTRUCTORS } from '../shared/instructors';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        items: state.items,
        musicians: state.musicians,
        instructors: state.instructors,
        gigs: state.gigs
    };
};

function RenderItem({item}) {
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

function RenderMusician({item}) {
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

function RenderInstructor({item}) {
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

function RenderGig({item}) {
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
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Buy. Sell. Trade. Locally.</Text>
                <RenderItem item={this.props.items.items.filter(item => item.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Find Musicians Near You</Text>
                <RenderMusician item={this.props.musicians.musicians.filter(musician => musician.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Learn with Local Instructors </Text>
                <RenderInstructor item={this.props.instructors.instructors.filter(instructor => instructor.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Play Local Venues </Text>
                <RenderGig item={this.props.gigs.gigs.filter(gig => gig.featured)[0]}/>

            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home); 