import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native';
import UnitBanner from '../Components/UnitBanner';

// const DATA = [
//   {
//     id: '1',
//     title: 'Yoğun Bakım',
//   },
//   {
//     id: '2',
//     title: 'Fizyoterapi',
//   },
// ];

export default class UnitScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    isLoading: true,
    unitCode: null,
  };

  getUnitWithCode = () => {
    // console.log(this.state.unitCode);
    fetch(`http://192.168.1.41:3000/units/${this.state.unitCode}`)
      .then(response => response.json())
      .then(data => {
        console.log('Data' + JSON.stringify(data));
        this.setState({
          data: data,
          isLoading: false,
        });
        // console.log("Son state ++" + this.state.data);
      });
  };

  getAllUnits = () => {
    fetch('http://192.168.1.41:3000/units')
      .then(response => response.json())
      .then(data => {
        console.log('Data+++++++++++++' + JSON.stringify(data));
        this.setState({
          data: data,
          isLoading: false,
        });
        // console.log("Son state ++" + this.state.data);
      });
  };
  componentDidMount() {
    this.getAllUnits();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="orange"></ActivityIndicator>
        </View>
      );
    }
    return (
      <View>
        <View style={styles.topContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Servis adı giriniz."
            onChangeText={unitCode => this.setState({unitCode: unitCode})}
            value={this.state.unitCode}
            keyboardType="default"></TextInput>
          <Button title="Ara" onPress={() => this.getUnitWithCode()}></Button>
        </View>

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

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    height: 40,
    padding: 10,
    borderWidth: 0.1,
    color: 'black',
    fontSize: 15,

    backgroundColor: 'lightgray',
  },
  topContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
