import React, { Component } from 'react';
import { Text, StyleSheet, View,TouchableOpacity,KeyboardAvoidingView,TextInput } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    state={
        email:"",
        password:"",
    };
    loginApp = () => {
      this.props.navigation.navigate("MainContent",{ screen: "UnitScreen" });
    };
    // componentDidMount(){
    //   console.log(this.props.navigation);
    // }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
            <View style={styles.daire}></View>
            <Text style={styles.logo}>PROBEL</Text>
            
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Email..."
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..."
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.loginApp()}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center",
      },
      logo: {
        fontWeight: "bold",
        fontSize: 75,
        color: "red",
        marginBottom: 40,
      },
      inputView: {
        width: "80%",
        backgroundColor: "#a38d8d",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
      },
      inputText: {
        height: 50,
        color: "white",
      },
      forgot: {
        color: "black",
        fontSize: 12,
        textDecorationStyle: "solid",
        fontStyle:"italic",
      },
      loginBtn: {
        width: "60%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
      },
      loginText: {
        color: "black",
        fontSize:15,
      },
      daire:{
    
        width:"55%",
        height:"100%",
        backfaceVisibility:"visible",
        backgroundColor:'hsla(360, 99%, 79%, 0.71)',
        position:"absolute",
        borderRadius:900,
        transform:[{rotate:"45deg"}],
    
    
      },
});
