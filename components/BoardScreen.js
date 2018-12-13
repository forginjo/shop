import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { List, ListItem, Button, Icon,Header, SearchBar, } from 'react-native-elements';
import firebase from '../Firebase';
import Drawer from 'react-native-drawer';
import Menu from './Menu';


class BoardScreen extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      boards: [],
      currentUser: null
    };
  }
  static navigationOptions = {
    header: null
}
    
  //     headerRight: (
  //       // <Button
  //       //   buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
  //       //   icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
  //       //   onPress={() => { navigation.push('AddBoard') }}
  //       // />

  //       <Button
  //               buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
  //               icon={{ name: 'menu', style: { marginRight: 0, fontSize: 28 } }}
  //               onPress={() => this.openControlPanel()}
                
  //             />
  //     ),
  //     // headerLeft: (
  //     //     <Button
  //     //       buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
  //     //       icon={{ name: 'menu', style: { marginRight: 0, fontSize: 28 } }}
  //     //       onPress={() => { navigation.push('Menu') }}
            
  //     //     />
  //     // ),
    
  
  
  closeControlPanel = () => {
    this._drawer.close()
};

openControlPanel = () => {
    this._drawer.open()
};

  
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards,
      isLoading: false,
    });
  }
  render() {
    const { currentUser } = this.state;
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      type="overlay"
      content={<Menu navigation={this.props.navigation}
      />}
      drawerBackgroundColor={'#777777'}
      tapToClose={true}
      openDrawerOffset={0.35} // 35% gap on the right side of drawer
      //panCloseMask={0.2} 
      closedDrawerOffset={-3}
      style={styles.drawer1}
      tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })} >
      <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.openControlPanel(), }}
          // centerComponent={
          //     <View style={styles.searchHeader}>
          //         <SearchBar
          //             lightTheme
          //             showLoading
          //             icon={{ type: 'font-awesome', name: 'search', color: 'white', size: 24 }}
          //             containerStyle={styles.searchBarEl}
          //             inputStyle={{ backgroundColor: '#e24f2d' }}
          //             onChange={(event) => this.applyFilter(event.nativeEvent.text)}
          //         />
          //     </View>}
          // rightComponent={<Icon
          //     name='filter-variant'
          //     type='material-community'
          //     color='white'
          // />}
          outerContainerStyles={{
              backgroundColor: '#777777',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 57,
          }}
      />
      <ScrollView style={styles.container}>
      <View style={{flex:1, alignItems:'center'}}>
      <Text style={{fontSize:23, fontWeight:'bold'}}>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    
        <List>
          {
            this.state.boards.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: 'book', type: 'font-awesome' }}
                onPress={() => {
                  this.props.navigation.navigate('BoardDetails', {
                    boardkey: `${JSON.stringify(item.key)}`,
                  });
                }}
              />
            ))
          }
        </List>
      </ScrollView>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawer1:{ shadowColor: '#777777', shadowOpacity: 0.8, shadowRadius: 3 },

})

export default BoardScreen;