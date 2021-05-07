import React, {Component} from 'react';
import * as RootNavigation from '../Components/RootNavigation';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class UnitBanner extends Component {
  constructor(props) {
    super(props);
  }
  goPatients = () => {
    RootNavigation.navigation('PatientScreen',{id:this.props.id,drId:2});
    // console.log(RootNavigation);
  };
  componentDidMount() {
    // console.log('Unit props' + JSON.stringify(this.props));
  }  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.goPatients()}>
          <Text style={styles.fontStyle}> {this.props.ad} </Text>
          
        </TouchableOpacity>
        <View
            style={{
              margin: 3,
              borderBottomColor: 'red',
              borderBottomWidth: 1,
            }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonStyle: {
    margin: 5,
    padding: 2,
  },
  fontStyle: {
    fontSize: 20,
  },
});
