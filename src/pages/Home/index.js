import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import Geral from '../Geral';
import Mapa from '../Mapa';

export default function Home() {

    const [menuActive, setMenuActive] = useState('Mapa');

    return (
        <>
            <View style={{ display: menuActive === 'Mapa' ? 'flex' : 'none' }}>
                <Mapa />
            </View>

            <View style={{ display: menuActive === 'Geral' ? 'flex' : 'none' }}>
                <Geral />
            </View>



            <View style={styles.menu}>
                <TouchableOpacity activeOpacity={.8} onPress={() => setMenuActive('Geral')} style={[styles.menuItem, { borderTopColor: menuActive === 'Geral' ? '#ea5569' : '#fff' }]}>
                    <Icon name="earth" size={25} color={menuActive === 'Geral' ? '#ea5569' : '#8490a6'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => setMenuActive('Cuidados')} style={[styles.menuItem, { borderTopColor: menuActive === 'Cuidados' ? '#ea5569' : '#fff' }]}>
                    <Icon name="account-heart-outline" size={25} color={menuActive === 'Cuidados' ? '#ea5569' : '#8490a6'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => setMenuActive('Mapa')} style={[styles.menuItem, { borderTopColor: menuActive === 'Mapa' ? '#ea5569' : '#fff' }]}>
                    <Icon name="map-outline" size={25} color={menuActive === 'Mapa' ? '#ea5569' : '#8490a6'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => setMenuActive('Teste')} style={[styles.menuItem, { borderTopColor: menuActive === 'Teste' ? '#ea5569' : '#fff' }]}>
                    <Icon name="account-check-outline" size={25} color={menuActive === 'Teste' ? '#ea5569' : '#8490a6'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} onPress={() => setMenuActive('Info')} style={[styles.menuItem, { borderTopColor: menuActive === 'Info' ? '#ea5569' : '#fff' }]}>
                    <Icon name="information-outline" size={25} color={menuActive === 'Info' ? '#ea5569' : '#8490a6'} />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 60,
        backgroundColor: '#fff',
        width: deviceWidth,
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        borderTopColor: '#eee',
        borderTopWidth: 1

    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 3
    }
});