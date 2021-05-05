import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../Components/RootNavigation';

export default class PatientBanner extends Component {
  constructor(props) {
    super(props);
  }
  state={
    data:this.props,
  }
  goPatientDetail = () => {
    RootNavigation.navigation('PatientDetail', { data:this.state.data });
  };
  componentDidMount() {
    var data = this.props;
    // console.log('PatientBanner+' + JSON.stringify(data));
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.goPatientDetail()}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.profilePic}
              source={{
                uri: `${this.props.picture}`,
              }}></Image>
          </View>
          <View style={styles.altContainer}>
            <View style={styles.infoContainer}>
              <Text>{this.props.ad}</Text>
              <Text>{this.props.ptNo}</Text>
              <Text>{this.props.age}</Text>
              <Text>{this.props.patientS}</Text>
            </View>
            <View style={styles.secondifoCont}>
              <Text>{this.props.rNo}</Text>
              <Text>Basamak:2</Text>
              <Text>Kg:{this.props.weight}</Text>
              <Text>Dr:{this.props.dr}</Text>
            </View>
            <View
              style={{
                margin: 5,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}></View>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.popupStyle}>
                <Text>{this.props.hb}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.popupStyle}>
                <Text>{this.props.heat}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.popupStyle}>
                <Text>{this.props.lung}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 20,
    backgroundColor: 'lightgray',
  },
  infoContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    margin: 5,
    flexDirection: 'row',
  },
  secondifoCont: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    margin: 5,
    flexDirection: 'row',
  },
  profilePic: {
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 20,
    margin: 5,
  },
  altContainer: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  popupStyle: {
    margin: 5,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
