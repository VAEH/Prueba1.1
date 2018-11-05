import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Right
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import StatusBar from 'react-native-custom-statusbar';

export default class HomeScreen extends React.Component {
 static navigationOptions={
   drawerLabel: 'prueba',
  drawerIcon : ({tintColor}) => (
    < Ionicons  name="ios-menu" size={32} color="green"/>
    )}
    /*draweIcon:(
      <Image source={require('')}
      style={{height:24, width:24 }}/>
    ) 
    } */  
    

  render() {
    return (
      <View style={styles.Container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={()=> this.props.navigation.openDrawer()}/>
          </Left>
        </Header>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>HomeScreen</Text>
        < Ionicons name="ios-menu" size={32} color="green"/>
        </View>
      </View>
     /* <Container>
        
        <Header  style={{ backgroundColor: '#5E0404' }}
          androidStatusBarColor="red">
<StatusBar hidden/>
        </Header>
        <Content  >
          <Text>
              HomeScreen
          </Text>
          </Content>
          </Container>*/
      
    );
  }
}
const headerIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;
const styles =StyleSheet.create({
  Container:{
    flex:1,
    
  }
});


