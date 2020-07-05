import React from 'react';

import {
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';


import Login from '../screens/Login';
import Profile from '../screens/Profile';
import QRScanner from '../screens/QRScanner';
import Home from '../screens/Home';
import BeerDesc from '../screens/Beer';

export const SwitchRouter = createAppContainer(
    createSwitchNavigator({
        BeerDesc,
        Login,
        Profile,
        QRScanner, 
        Home
    }))