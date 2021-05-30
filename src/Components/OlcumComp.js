import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
import PureChart from 'react-native-pure-chart';

export default class OlcumComp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    olcumler: null,
    chartValue: 'Ates',
    isLoading: true,
    atesDeger: [],
    tarihDeger:[],
  };

  componentDidMount() {
    this.getOlcumDegerleri();
  }
  getOlcumDegerleri = () => {
    fetch(`http://192.168.1.41:3000/patients/olcumler/${this.props.yatisId}`)
      .then(response => response.json())
      .then(data => {
        this.setState(previousState=>({
          olcumler: data,
          atesDeger: this.state.atesDeger.concat(parseFloat(data[0][2])),
          tarihDeger:this.state.tarihDeger.concat(data[0][3].toString()),
          isLoading: false,
        }));
        console.log('Olcumler  ' + this.state.olcumler);
        console.log('Ates Degeri Tipi= ' +  typeof this.state.tarihDeger[0]);
        console.log('Ates Degeri= ' +   this.state.tarihDeger);
      });
  };
  render() {
    let chart;
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="small" color="blue"></ActivityIndicator>
        </View>
      );
    } else {
      if (this.state.chartValue == 'Ates') {
        chart = <PureChart data={this.state.atesDeger} type="line" />;
      } else {
        chart = <Text>Chart Yok</Text>;
      }
    }

    return (
      <View style={styles.container}>
        <View>
          
        
        <DropDownPicker
          items={[
            {label: 'Ateş Değerleri', value: 'Ates'},
            {label: 'Kan Şekeri Değerleri', value: 'kansekeri'},
          ]}
          defaultValue={this.state.chartValue}
          containerStyle={{height: 40, margin:5}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item =>
            this.setState({
              chartValue: item.value,
            })
          }
        />
        </View>
        {chart}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
  },
});
