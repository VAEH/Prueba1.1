import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimensions,Image }
from 'react-native';
import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator, DrawerItems} from 'react-navigation';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';



//const {width}= Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>,
      <AppDrawerNatigation/>
      
    );
  }
}
const CustomDrawerComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:'#5E0404', alignItems:'center',
  justifyContent:'center'}}>
    <Image source={require('./assets/LogoUnaula.png')}   style={{height:150, width:150,
      borderRadius:150}}
      /> 
      
    </View>
    
    <ScrollView>
      
      <DrawerItems {...props}/>
    </ScrollView>
    
  </SafeAreaView>
)
const AppNavigator =createStackNavigator({
  HomeScreen:{screen : TabScreens},
  HomeScreen: {screen: HomeScreen}
});
const AppDrawerNatigation = createDrawerNavigator({
  //HomeScreen: {screen: HomeScreen},
  Settings:{screen : SettingsScreen},
},
{
 contentComponent:CustomDrawerComponent ,
// drawerWidth:width,
 contentOptions:{
   activeTintColor:'orange'
 }
});

const TabScreens = createBottomTabNavigator({
  Deportes: { screen: HomeScreen,
  navigationOptions:{
    tabBarlabel:'HomeScreen',
    tabBarIcon : ({tintColor})=>(
     <Icon name="ios-walk"  style={{fontSize:24, color:'#fff'}}/>

    )

  }
  },});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E0404',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
