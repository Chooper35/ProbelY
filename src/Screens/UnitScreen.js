
import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList,ActivityIndicator} from 'react-native';
import UnitBanner from '../Components/UnitBanner';

const DATA = [
  {
    id: '1',
    title: 'Yoğun Bakım',
  },
  {
    id: '2',
    title: 'Fizyoterapi',
  },
];

export default class UnitScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    isLoading:true,
  };

  componentDidMount() {
    fetch('http://192.168.1.35:3000/units')
    .then(response => response.json())
    .then((data)=>{
      console.log("Data+++++++++++++"+JSON.stringify(data));
      this.setState({
        data:data,
        isLoading:false,
      });
      console.log("Son state ++" + this.state.data);

    });
    
  }
  render() {
    if (this.state.isLoading) {
      return(
        <View style={{
          flex:1,
          backgroundColor:"white",
          alignItems:"center",
          justifyContent:"center",
        }
        }>
          <ActivityIndicator size="large" color="orange"></ActivityIndicator>
        </View>
      )
      
    } 
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <UnitBanner id={item[0]} ad={item[2]}></UnitBanner>
          )}
          keyExtractor={item => item[0]}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
