import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class OlcumBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> 5  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"cyan",
        margin:5,
        padding:10,
        borderRadius:10,
    
    },
    textStyle:{
        fontSize:15,
    }
});
