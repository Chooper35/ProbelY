import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class OlcumBanner extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Banner Data : ' + JSON.stringify(this.props.data[0][1]));
  }
  render() {
    return (
      <ScrollView
        horizontal={true}
        style={styles.container}
        alwaysBounceHorizontal={true}>
        <TouchableOpacity onPress={() => alert(this.props.data[0][2])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][1]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][4])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][3]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][6])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][5]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][8])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][7]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][10])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][9]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][12])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][11]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][14])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][13]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][16])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][15]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][18])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][17]}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(this.props.data[0][20])}>
          <View style={styles.altContainer}>
            <Text style={styles.textStyle}>{this.props.data[0][19]}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  altContainer: {
    backgroundColor: 'lightgreen',
    margin: 5,
    padding: 15,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 15,
  },
});
