import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { GIGS } from '../shared/gigs';
import { MUSICIANS } from '../shared/musicians';
import { ITEMS } from '../shared/items';
import { INSTRUCTORS } from '../shared/instructors';

function RenderItem({item}) {
    if (item) {
        return(
            <Card
                featuredTitle={item.name}
                image={require('./images/taylor.jpg')}
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
                image={require('./images/taylor.jpg')}
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
    constructor(props) {
        super(props);
        this.state={
            items: ITEMS,
            musicians: MUSICIANS,
            gigs: GIGS,
            instructors: INSTRUCTORS 
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Buy. Sell. Trade. Locally.</Text>
                <RenderItem item={this.state.items.filter(item => item.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Find Musicians Near You</Text>
                <RenderMusician item={this.state.musicians.filter(item => item.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Learn with Local Instructors </Text>
                <RenderInstructor item={this.state.instructors.filter(item => item.featured)[0]} />

                <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Play Local Venues </Text>
                <RenderGig item={this.state.gigs.filter(item => item.featured)[0]}/>

            </ScrollView>
        );
    }
}

export default Home;