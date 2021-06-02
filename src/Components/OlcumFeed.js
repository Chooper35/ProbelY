import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList,ActivityIndicator} from 'react-native';
import OlcumBanner from './OlcumBanner';

export default class OlcumFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    prevOlcumler: null,
    olcumler: [3, 4, 5],
    isLoading: true,
  };

  componentDidMount() {
    console.log('Propsie' + JSON.stringify(this.props.yatisId));
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
      })
      .catch(err => {
        alert(err);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={({item}) => <OlcumBanner></OlcumBanner>}
          numColumns={1}
          horizontal={true}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
