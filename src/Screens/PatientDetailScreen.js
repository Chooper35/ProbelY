import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PureChart from 'react-native-pure-chart';
import OlcumComp from '../Components/OlcumComp';
export default class PatientDetailScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: null,
    olcumler: null,
    isLoading: true,
    chartValue: 'Ates',
  };
  componentDidMount() {
    // console.log('Son props' + JSON.stringify(this.props.route.params.data.yatisId));
    this.getPatientDetail();
  }
  getPatientDetail = () => {
    fetch(
      `http://192.168.1.41:3000/patients/detail/${this.props.route.params.data.yatisId}`,
    )
      .then(response => response.json())
      .then(data => {
        // console.log('Data+++++++++++++' + JSON.stringify(data));
        this.setState({
          data: data,
          isLoading: false,
        });
        console.log('Son state' + this.state.data[0]);
      });
  };
  //Dropdownlistte seçilen ölçüm değeri neyse onun verilerini getirtme fonksiyonu
 
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
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={styles.pictureStyle}
            source={{
              uri: `${this.props.route.params.data.picture}`,
            }}></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.textStyle}>
              {this.props.route.params.data.ad +
                ' ' +
                this.props.route.params.data.soyad}
            </Text>
            <Text>{this.props.route.params.data.ptNo}</Text>
            <Text>{this.props.route.params.data.patientS}</Text>
            <Text>Doğum Tarihi:05/11/1999</Text>
            <Text>Oda Numarası:{this.props.route.params.data.rNo}</Text>
            <Text>{this.props.route.params.data.dr}</Text>
            <View
              style={{
                margin: 3,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}></View>
          </View>
        </View>

        <View style={styles.altContainer}>
          <View style={styles.blocks}>
            <Text>Tanı:Anksiyete</Text>
          </View>
          <View style={styles.blocks}>
            <Text>İzolasyon yok</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Yara Var</Text>
          </View>
        </View>
        <View
          style={{
            margin: 3,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}></View>
        <View style={styles.altContainer}>
          <View style={styles.blocks}>
            <Text>Diyet Adı:</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Gün:55 / Mod:PSMV+</Text>
          </View>
          <View style={styles.dangerBlock}>
            <Text>Adli Vaka</Text>
          </View>
        </View>
        <View
          style={{
            margin: 3,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}></View>
        <View style={styles.altContainer}>
          <View style={styles.blocks}>
            <Text>Yattığı Gün:52</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Hafif Ağrısı Var</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Uyarı Var</Text>
          </View>
        </View>
        <View
          style={{
            margin: 3,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}></View>
        <View style={styles.altContainer}>
          <View style={styles.blocks}>
            <Text>Yeni Tetkik var</Text>
          </View>
          <View style={styles.dangerBlock}>
            <Text>Sepsis</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Nutrisyon formu var</Text>
          </View>
        </View>
        <View
          style={{
            margin: 3,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}></View>
        <View style={styles.altContainer}>
          <View style={styles.blocks}>
            <Text>Gebe Değil</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Protez Var</Text>
          </View>
          <View style={styles.blocks}>
            <Text>Alerji Yok</Text>
          </View>
        </View>
        <OlcumComp yatisId={this.props.route.params.data.yatisId}></OlcumComp>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pictureStyle: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
  },
  altContainer: {
    flexDirection: 'row',
  },
  chartView: {
    flex: 1,
  },
  blocks: {
    flex: 1,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  dangerBlock: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  textStyle: {
    fontSize: 20,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
  },
  buttonContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  buttonStyle: {
    margin: 3,
    backgroundColor: 'orange',
    padding: 8,
  },
});
