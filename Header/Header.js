import React from 'react';
import {View, TouchableOpacity,Image} from 'react-native';

const Header =() =>{
<view>
    <TouchableOpacity>
        <Image source={require('./images/gear.png')}/>
    </TouchableOpacity>
</view>
};

export default Header;