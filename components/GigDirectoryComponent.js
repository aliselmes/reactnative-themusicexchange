import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { ITEMS } from '../shared/items';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        gigs: state.gigs
    };
};

class GigDirectory extends Component {
    constructor(props){
        super(props)
        this.state={
            data: this.props.gigs.gigs,
            search: ''
        }
    }

    static navigationOptions = {
        title: 'Gigs'
    } 

    renderHeader=()=>{
        const { search } = this.state;
          return(
              <SearchBar
              placeholder="Search By Location"
              lightTheme   
              onChangeText={text=>this.searchAction(text)}
              autoCorrect={false}
              value={search}
              />
          )
      }
      searchAction=(text)=>{
          const newData=this.props.gigs.gigs.filter(item=>{
              const itemData=`${item.location.toUpperCase()}`;
              const textData=text.toUpperCase();
              return itemData.indexOf(textData) > -1;

          });
          this.setState({
              data:newData,
              search:text
          });
      }

    render () {
        const { navigate } = this.props.navigation;
        const renderGig = ({item}) => { 
            return (
                <ListItem
                    title={item.venue}
                    subtitle={`${item.location} - ${item.date} - ${item.time}`}
                    onPress={() => navigate('GigInfo', { gigId: item.id})}
                />
            );
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={item=>renderGig(item)}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={this.renderHeader}
            />
        );
    }
}

export default connect(mapStateToProps)(GigDirectory); 