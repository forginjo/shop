import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';
import firebase from 'react-native-firebase';
import validator from 'validator'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            
        };
    }
    static navigationOptions = {
        title: 'Choose Your Service',
    };
    

    handleSetEmailLogin = (email) => {
        this.setState(
            { email }
        )
    }

    handleSetPasswordLogin = (password) => {
        this.setState(
            { password }
        )

    }

    
    handleLogin (email, password) {
           // if(this.state.email === '' && this.state.password === '' ){
        //     alert('JOk')
        // }
       
        // if (this.state.email && this.state.password) {
        //     if (this.state.password && this.state.password === '') {
        //         alert('Jok')
        //     }
        // }
        //  const {email, password} = this.state;
        // if (validator.isEmpty(this.state.email)) {
        //        alert('jokkk');
        //      }else if (validator.isEmpty(this.state.password)) {
        //         alert('nono');
        // const { email, password } = this.state
        if (validator.isEmpty(this.state.email && this.state.password)) {
                  
                 alert('nono');
                 }
       
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Board'))
          .catch((error) =>
          { 
                this.setState({
                  loading: false
                });
                
          alert(error);
      });

      
      }
      

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>

                <TextInput
                    onChangeText={this.handleSetEmailLogin}
                    placeholder='Email'
                    autoCapitalize="none"
                    value={this.state.email}
                    />
                <TextInput
                    onChangeText={this.handleSetPasswordLogin}
                    placeholder='Password'
                    returnKeyLabel='go'
                    secureTextEntry
                    autoCapitalize="none"
                    onSubmitEditing={this.handleLogin}
                    value={this.state.password}
                />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={() => this.handleLogin()}//za sada
                    // onPress={() =>this.props.navigation.navigate('Board')}
                    title="Login"
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 15 }}>or</Text>
                </View>

                <Button
                    onPress={() => this.props.navigation.navigate('Board')} //za sada
                    title="Register"
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 15 }}>Privacy Policy</Text>
                </View>

            </ScrollView>
        )
    }
}

export default LoginScreen;