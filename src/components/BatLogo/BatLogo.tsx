import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import logo from '../../../assets/bat-logo.png'

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>PASS GENERATOR</Text>
            <Image source={logo} style={{
                resizeMode: 'contain',
                height: 180,
            }} />
        </>
    );
}