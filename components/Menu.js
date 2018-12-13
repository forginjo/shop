// import React from "react";
// import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";
// import { Avatar } from 'react-native-elements';
// const { width, height } = Dimensions.get("window")
// const SCREEN_WIDTH = width
// const SCREEN_HEIGHT = height
// import firebase from 'react-native-firebase';


// class Menu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
          
//         }
//     }
//     static navigationOptions = ({ navigation }) => {
//         return {
//           title: 'Options',
//           // headerRight: (
//           //   <Button
//           //     buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
//           //     icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
//           //     onPress={() => { navigation.push('AddBoard') }}
//           //   />
//           // ),
//         //   headerLeft: (
//         //       <Button
//         //         buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
//         //         icon={{ name: 'menu', style: { marginRight: 0, fontSize: 28 } }}
//         //         onPress={() => { navigation.push('Menu') }}
                
//         //       />
//         //   ),
        
//         };
//       };

//     render() {
       
//         return (
           
                
//                     <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
                     
                  
//                 <View >
//                     <TouchableHighlight
//                     onPress={() => this.props.navigation.navigate('AddBoard')}
//                     style={styles.button1}
//                     >
//                      <Text style={styles.text1}>Prodaj</Text>
//                     </TouchableHighlight>
//                 </View>
                
//                 <View >
//                 <TouchableHighlight
                    
//                     onPress={() => this.props.navigation.navigate('Board')}
//                     style={styles.button1}
//                     >
//                     <Text style={styles.text1}>Kupi</Text>
//                     </TouchableHighlight>
//                 </View>

//                 <View >
//                 <TouchableHighlight
//                  onClick={firebase.doSignOut}
//                     onPress={() => this.props.navigation.navigate('Login')}
//                     style={styles.button2}
//                     >
//                     <Text style={styles.text1}>Log out</Text>
//                     </TouchableHighlight>
//                 </View>
               
        
//             </View >
//         );
//     }
// }
// const styles = StyleSheet.create({
//     button1: {
//         marginTop:50,
//         height: 50,
//         width: SCREEN_WIDTH * 0.70,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderLeftWidth: 0.2,
//         borderRightWidth:1.3,
//         borderBottomWidth: 1.3,
//         borderTopWidth:0.2,
//         borderColor: 'black',
//         alignItems: 'center',
//         paddingLeft: 20,
//         backgroundColor:'#a7a9ac',
        
//     },
//     button2: {
//         marginTop:50,
//         height: 50,
//         width: SCREEN_WIDTH * 0.70,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderLeftWidth: 0.2,
//         borderRightWidth:1.3,
//         borderBottomWidth: 1.3,
//         borderTopWidth:0.2,
//         borderColor: 'black',
//         alignItems: 'center',
//         paddingLeft: 20,
//         backgroundColor:'#cc0000',
        
//     },
//     text1:{
//         color:'white',
//         fontWeight:'bold'
//     }
   
  
//   })


// export default Menu;


import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Avatar } from 'react-native-elements';
import firebase from 'react-native-firebase';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    logout = () => {
        auth.signOut().then(() => {
            this.setState({
                user: null
            })
        })
    }
    render() {
       
        return (
            <View style={{marginLeft:20, backgroundColor:'#777777', height:400}}>
                    <View>
                        <Avatar
                            large
                          
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                            overlayContainerStyle={{ flex: 1, marginRight: 30 }} /*Some Layout fixes*/
                            imageProps={{ resizeMode: 'cover' }}
                            activeOpacity={0.3}
                        />
                        
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
               
                <View style={{margin:10, padding:5}}>
                <TouchableHighlight
                onPress={() => this.props.navigation.navigate('AddBoard')}
                >
                   
                        <Text>Prodaj</Text>
                   
                </TouchableHighlight>
                </View>
                <View style={{margin:10, padding:5}}>
                <TouchableHighlight>
                    <Text>Moje ponude</Text>
                    </TouchableHighlight>
                </View>

                <View style={{margin:10, padding:5}}>
                <TouchableHighlight
                style={{marginTop:70}}
                onClick={this.logout}
               onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text >Log out</Text>
                    </TouchableHighlight>
                </View>
                
                </View>
               
            </View >
        );
    }
}


export default Menu;