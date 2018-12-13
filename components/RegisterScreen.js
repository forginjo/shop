import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';
import firebase from '../Firebase';

const { width, height } = Dimensions.get("window")
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
    static navigationOptions = {
        title: 'Register',
    };

    handleRegisterUser = () => {
        const { email,
            password,
            firstName,
            lastName } = this.state;
         this.props.navigation.navigate('Board');

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            const fbRootRefFS = firebase.firestore();
            const userID = user.user.uid;
            const userRef = fbRootRefFS.collection('users')
            .doc(userID);
            userRef.set({
                email,
                firstName,
                lastName,
                password
            });
        }).catch((error) => {
            console.error("Error adding document: ", error);})

    }

    handleSetFirstName = (firstName) => {
        this.setState(
            { firstName }
        );
    }

    handleSetLastName = (lastName) => {
        this.setState(
            { lastName }
        );
    }
    handleSetEmail = (email) => {
        this.setState(
            { email }
        );
    }
    handleSetPassword = (password) => {
        this.setState(
            { password }
        );
    }

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>

                <TextInput
                    style={styles.textInput1} placeholder='First Name'
                    onChangeText={this.handleSetFirstName}
                />
                <TextInput
                    onChangeText={this.handleSetLastName}
                    style={styles.textInput1} placeholder='Last Name' />
                <TextInput
                    onChangeText={this.handleSetEmail}
                    style={styles.textInput1} placeholder='E-mail address' />
                <TextInput
                    onChangeText={this.handleSetPassword}
                    style={styles.textInput1} placeholder='Password'
                    secureTextEntry
                     />
                <View style={{ margin: 7 }} />
                <Button
                    onPress={() => this.handleRegisterUser()} //za sada
                    title="Register"
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 15 }}>Privacy Policy</Text>
                </View>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    textInput1: {
        marginTop: 20,
        height: 50,
        width: SCREEN_WIDTH * 0.70,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0.2,
        borderRightWidth: 1.3,
        borderBottomWidth: 1.3,
        borderTopWidth: 0.2,
        borderColor: 'black',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: '#e6f2ff',

    }

})


export default RegisterScreen;