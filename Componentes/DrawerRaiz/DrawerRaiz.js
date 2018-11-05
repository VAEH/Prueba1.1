import React, {Component} from 'react';
import{
    Plataform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {DrawerNavigator,StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-vector-icons/Ionicons';
import prueba from './Prueba/prueba'
const pruebaStack = StackNavigator({
    prueba:{
        screen: prueba,
        navigationOptions:({navigation})=>({
            title:"Pantalla 1.1",
            headerLeft:<Text>    <Icon name="md-menu"
            size={35} onPress={()=>this.props.navigation.openDrawer()}/>

                       </Text>

        })
    }
});
const DrawerRaiz = DrawerNavigator({
    pruebaDrawer:{
      screen: prueba
    }
});
export default DrawerRaiz;