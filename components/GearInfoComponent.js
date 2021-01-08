import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderGearItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                image={require('./images/taylor.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function GearInfo(props) {
    return <RenderGearItem item={props.item} />;
}

export default GearInfo;