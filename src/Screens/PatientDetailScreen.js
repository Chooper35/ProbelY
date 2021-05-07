import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default class PatientDetailScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Son props' + JSON.stringify(this.props.route.params.data.ad));
  }
  render() {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={styles.pictureStyle}
            source={{
              uri:`${this.props.route.params.data.picture}`
               
            }}
          ></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.textStyle}>
              {this.props.route.params.data.ad+" "+this.props.route.params.data.soyad}
              
            </Text>
            <Text>{this.props.route.params.data.ptNo}</Text>
            <Text>{this.props.route.params.data.patientS}</Text>
            <Text>Doğum Tarihi:05/11/1999</Text>
            <Text>Oda Numarası:{this.props.route.params.data.rNo}</Text>
            <Text>{this.props.route.params.data.dr}</Text>
            <View
              style={{
                margin: 3,
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            ></View>
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
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        ></View>
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
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        ></View>
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
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        ></View>
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
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
          }}
        ></View>
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
    
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}><Text>O2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}><Text>O2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}><Text>O2</Text></TouchableOpacity>
        
        </View> */}
       
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
