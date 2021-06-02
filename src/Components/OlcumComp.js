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
    prevOlcumler: null,
    olcumler: [6, 7, 8],
    chartValue: 'Ates',
    isLoading: true,
  };

  componentDidMount() {
    this.getOlcumDegerleri();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.chartValue !== this.state.chartValue) {
      this.getOlcumDegerleri();
    }

    // if ((this.state.prevOlcumler[0][2] !== this.state.olcumler[0][2]) && (this.state.prevOlcumler[0][2] != this.state.olcumler[0][2])) {
    //   // console.log('Obje 1 ++' + this.state.prevOlcumler[2]);
    //   // console.log('Obje 2 ++' + this.state.olcumler[2]);
    //   console.log("PrevState**"+this.state.prevOlcumler[0][2]);
    //   console.log("This State**"+this.state.olcumler[0][2]);
    //   this.getOlcumDegerleri();
    // }
  }
  getOlcumDegerleri = () => {
    fetch(`http://192.168.1.41:3000/patients/olcumler/${this.props.yatisId}`)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          prevOlcumler: prevState.olcumler,
          olcumler: data,
          isLoading: false,
        }));
        // console.log('PrevState in fun' + this.state.olcumler);
        // console.log('Olcumler  ' + this.state.olcumler);
        // console.log('Ates Degeri Tipi= ' + typeof this.state.atesDeger[0]);
        // console.log('Ates Degeri= ' + this.state.atesDeger);
      }).catch(err =>{
        alert(err);
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
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][2]}`, y: parseFloat(this.state.olcumler[0][1])},
            ]}
            type="line"
          />
        );
      }
      else if (this.state.chartValue == 'frekans') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][4]}`, y: parseFloat(this.state.olcumler[0][3])},
            ]}
            type="line"
          />
        );
      }
      else if (this.state.chartValue == 'kanb') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][6]}`, y: parseFloat(this.state.olcumler[0][5])},
            ]}
            type="line"
          />
        );
      }  
      else if (this.state.chartValue == 'kans') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][8]}`, y: parseFloat(this.state.olcumler[0][7])},
            ]}
            type="line"
          />
        );
      } 
      else if (this.state.chartValue == 'kd') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][10]}`, y: parseFloat(this.state.olcumler[0][9])},
            ]}
            type="line"
          />
        );
      } 
      else if (this.state.chartValue == 'nb') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][12]}`, y: parseFloat(this.state.olcumler[0][11])},
            ]}
            type="line"
          />
        );
      } 
      else if (this.state.chartValue == 'o2') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][14]}`, y: parseFloat(this.state.olcumler[0][13])},
            ]}
            type="line"
          />
        );
      } 
      else if (this.state.chartValue == 'sl') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][16]}`, y: parseFloat(this.state.olcumler[0][15])},
            ]}
            type="line"
          />
        );
      } 
      else if (this.state.chartValue == 'dv') {
        chart = (
          <PureChart
            width={'100%'}
            height={200}
            data={[
              {x: `${this.state.olcumler[0][18]}`, y: parseFloat(this.state.olcumler[0][17])},
            ]}
            type="line"
          />
        );
      } 
      
      else {
        chart = <Text style={{margin: 10}}>Chart Yok</Text>;
      }
    }

    return (
      <View style={styles.container}>
        <View>
          <DropDownPicker
            items={[
              {label: 'Ateş Değerleri', value: 'Ates'},
              {label: 'Frekans', value: 'frekans'},
              {label: 'Kan Basıncı', value: 'kanb'},
              {label: 'Kan Şekeri', value: 'kans'},
              {label: 'Karbondioksit değeri', value: 'kd'},
              {label: 'Nabız', value: 'nb'},
              {label: 'O2 Saturasyon', value: 'o2'},
              {label: 'Solunum', value: 'sl'},
              {label: 'Tidal volume', value: 'tv'},
            ]}
            defaultValue={this.state.chartValue}
            containerStyle={{height: 40, margin: 5}}
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
        <View>{chart}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
