import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PureChart from 'react-native-pure-chart';

export default class OlcumComp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    olcumler:null,
    chartValue: 'Ates',
    isLoading: true,
  };

  componentDidMount() {
    this.getOlcumDegerleri();
  }
  getOlcumDegerleri = () => {
    fetch(`http://192.168.1.41:3000/patients/olcumler/${this.props.yatisId}`)
      .then(response => response.json())
      .then(data => {
         console.log('Olcumdata' + JSON.stringify(data));
        this.setState({
          olcumler: data,
          isLoading: false,
        });
        console.log('Olcumler  ' + this.state.olcumler[0]);
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
              <ActivityIndicator size="large" color="blue"></ActivityIndicator>
            </View>
          );
    }
    else{
        if (this.state.chartValue == 'Ates') {
      chart = (
        <PureChart
          data={[30,105,100]}
          type="line"
        />
      );
    } else {
      chart = <Text>Chart Yok</Text>;
    }

    }
    
    return (
      <ScrollView style={styles.container}>
        <DropDownPicker
          items={[
            {label: 'Ateş Değerleri', value: 'Ates'},
            {label: 'Kan Şekeri Değerleri', value: 'kansekeri'},
          ]}
          defaultValue={this.state.chartValue}
          containerStyle={{height: 40,margin:5}}
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
        <View style={
            {flex:1,}
        }>
        {chart} 

        </View>
             
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
