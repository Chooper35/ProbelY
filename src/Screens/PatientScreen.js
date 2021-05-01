import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PatientBanner from '../Components/PatientBanner';


const DATA = [
    {
      id: '1',
      name: 'Ayberk Düzova',
      patientNo: 172802010,
      patientAge: 21,
      patientS: 'E',
      roomNumber: 'G-3',
      patientWeight: 60,
      patientDr: 'Ayberk Düzova',
      patientSıcaklık: 36,
      patientHB: 110,
      patientLung: 18,
      picture:"https://avatars.githubusercontent.com/u/37003658?s=400&u=2aa87195416b81af51dfffb3aa25ec47142e1460&v=4"
    },
    {
      id: '2',
      name: 'Berkan Düzova',
      patientNo: 123123123,
      patientAge: 28,
      patientS: 'E',
      roomNumber: 'G-2',
      patientWeight: 90,
      patientDr: 'Mehmet Öz',
      patientSıcaklık: 36.5,
      patientHB: 115,
      patientLung: 20,
      picture:"https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
    },
  ];
export default class PatientScreen extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => 
          <PatientBanner
          ad={item.name}
          ptNo={item.patientNo}
          age={item.patientAge}
          patientS={item.patientS}
          rNo={item.roomNumber}
          weight={item.patientWeight}
          dr={item.patientDr}
          heat={item.patientSıcaklık}
          hb={item.patientHB}
          lung={item.patientLung}
          picture={item.picture}
          >

          </PatientBanner>}
          keyExtractor={item => item.id}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
