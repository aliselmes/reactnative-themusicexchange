import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';
import MapView from 'react-native-maps';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern'
        });
    }

   render() {
       return (
           <ScrollView>
                    <Text style={{margin: 20, fontWeight: 'bold', fontSize: 20, color: '#2F6690'}}>Questions? Comments? Get in touch!</Text>
        
                    <Card
                            title="Contact Information"
                            wrapperStyle={{margin: 20}}
                    >

                    
                            <Text>Phone: 1-206-555-1234</Text>
                            <Text>Email: info@themusicexchange.com</Text>
                            <Button
                                title="Send Email"
                                buttonStyle={{backgroundColor: '#16425B', margin: 40}}
                                icon={<Icon
                                    name='envelope-o'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{marginRight: 10}}
                                />}
                                onPress={() => this.sendMail()}
                            />
                            <View style={styles.container}>
                                <MapView style={styles.map} 
                                            initialRegion={{
                                                latitude: 43.536388,
                                                longitude: 	-96.731667,
                                                latitudeDelta: 0.05,
                                                longitudeDelta: 0.05,
                                              }}
                                />
                            </View>

                    </Card>
           </ScrollView> 
       );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
          width: 300,
          height: 300
      }
});

export default Contact;