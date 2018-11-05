import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon, Button, Container, Header, Content, Left
} from 'native-base';
import {Constants} from 'expo';

import StatusBar from 'react-native-custom-statusbar';

export default class SettingsScreen extends React.Component {
  
  render() {
    return (
      
      <Container>
        
        <Header  style={{ backgroundColor: '#5E0404' }}
          androidStatusBarColor="red">
           <StatusBar hidden backgroundColor='red'/>
        </Header>
        
      
        
        
        <Content  >
          <Text>
              HomeScreen
          </Text>
          </Content>
          </Container>
      
    );
  }
}