import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PatientBanner from '../Components/PatientBanner';
import DropDownPicker from 'react-native-dropdown-picker';

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
    picture:
      'https://avatars.githubusercontent.com/u/37003658?s=400&u=2aa87195416b81af51dfffb3aa25ec47142e1460&v=4',
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
    picture:
      'https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png',
  },
];

export default class PatientScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    patients: [],
    patientsDetail: [],
    isLoading: true,
    pickerValue: 'Tüm',
  };
  getPatientsWithId = () => {
    fetch(
      `http://192.168.1.43:3000/patients/serviceId/${this.props.route.params.id}`,
    )
      .then(response => response.json())
      .then(data => {
        // console.log('Data******' + JSON.stringify(data));
        this.setState({
          patients: data,
          isLoading: false,
        });
        //  console.log("Son state dsd++" + this.state.patients);
      }).catch(err=>{
        alert(err);
      });
  };

  getPatientsWithdoktorId = () => {
    fetch(
      `http://192.168.1.43:3000/patients/doktorId/${this.props.route.params.drId}`,
    )
      .then(response => response.json())
      .then(data => {
        // console.log('Data******' + JSON.stringify(data));
        this.setState({
          patients: data,
          isLoading: false,
        });
        // console.log("Son state ++" + this.state.data);
      }).catch(err=>{
        console.log("Hata"+err);
        alert(err);
      });
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props));
    this.getPatientsWithId();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pickerValue !== this.state.pickerValue) {
      if (this.state.pickerValue == 'Dr') {
        this.getPatientsWithdoktorId();
      } else {
        this.getPatientsWithId();
      }
    }
  }

  render() {
    let list;
      list = (
        <FlatList
          data={this.state.patients}
          renderItem={({item}) => (
            <PatientBanner
              ad={item[3]}
              soyad={item[4]}
              ptNo={item[1]}
              age={item[7]}
              patientS={item[5]}
              rNo={item[8]}
              weight={item[6]}
              dr={item[2]}
              yatisId={item[9]}
              heat={item.patientSıcaklık}
              hb={item.patientHB}
              lung={item.patientLung}
              picture={
                'https://www.bhsu.edu/directory/_files/images/no-image-directory.png'
              }></PatientBanner>
          )}
          keyExtractor={item => item[0]}></FlatList>
      );
    
  
    
    return (
      <View>
        <DropDownPicker
          items={[
            {label: 'Kendi Hastalarım', value: 'Dr'},
            {label: 'Servis Hastaları', value: 'Tüm'},
          ]}
          defaultValue={this.state.pickerValue}
          containerStyle={{height: 40,margin:5}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item =>
            this.setState({
              pickerValue: item.value,
            })
          }
        />
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
