import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modalbox';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const top = require('../../../resources/img/toppp.png');

export default function Geral() {

    const [visibleModal, setVisibleModal] = useState(false);
    const [countries, setCountries] = useState([]);
    const [countriesFilter, setCountriesFilter] = useState([]);
    const [currentCountry, setCurrentCountry] = useState({});
    const [search, setSearch] = useState('');

    useEffect(() => {
        handlePais();
    }, [])

    handlePais = async () => {
        try {
            const response = await axios.get('https://api.covid19api.com/countries');

            let json = response.data;

            setCountries(json);
            setCountriesFilter(json);

        } catch (e) {
            console.log(e.toString());
        }
    }

    handleItem = (item) => {
        setCurrentCountry(item);
        setVisibleModal(false);
        setSearch('');
        setCountriesFilter(countries);
    }

    handleSearch = (search) => {
        setSearch(search);
        console.log(search);

        if (search !== '') {
            let arr = [];
            countries.forEach(e => {
                if (e.Country.toUpperCase().includes(search.toUpperCase())) {
                    arr.push(e);
                }
            });
            setCountriesFilter(arr);
        }
        else {
            setCountriesFilter(countries);
        }
    }

    return (
        <>
            <ScrollView style={{ height: deviceHeight }}>

                <View style={styles.topBack}>
                    <Image source={top} style={{ resizeMode: 'cover', width: deviceWidth, height: 250, position: 'absolute', zIndex: -1 }} />
                    <View style={{ margin: 20 }}>
                        <Text style={{ color: '#fff', fontFamily: 'Khula', fontSize: 17 }}>Rastreador COVID-19</Text>

                        <TouchableOpacity onPress={() => setVisibleModal(true)} activeOpacity={.8} style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#fff', fontFamily: 'Khula-Bold', fontSize: 35 }}>{currentCountry.Country}</Text>
                            <Icon name="menu-down" size={27} color="#fff" style={{ marginTop: 5 }} />
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', fontFamily: 'Khula', fontSize: 15 }}>Atualizado a 1 hora atrás</Text>
                    </View>

                </View>

                <View style={{ elevation: 10 }}>

                    <View style={{ flexDirection: 'row', marginTop: - deviceHeight * 0.08, justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>

                        <View style={{ width: deviceWidth * 0.4, backgroundColor: '#fff', elevation: 2, padding: 20, borderRadius: 3 }}>
                            <Text style={{ color: '#929eb2', fontFamily: 'Khula-Bold' }}>CONFIRMADOS</Text>
                            <Text style={{ fontSize: 35, fontFamily: 'Khula-Bold', color: '#fe083b' }}>753</Text>
                            <Text style={{ color: '#fe083b', fontFamily: 'Khula-Bold' }}>+100</Text>
                        </View>

                        <View style={{ width: deviceWidth * 0.4, backgroundColor: '#fff', elevation: 2, padding: 20, borderRadius: 3 }}>
                            <Text style={{ color: '#929eb2', fontFamily: 'Khula-Bold' }}>ATIVOS</Text>
                            <Text style={{ fontSize: 35, fontFamily: 'Khula-Bold', color: '#017bff' }}>753</Text>
                            <Text style={{ color: '#017bff', fontFamily: 'Khula-Bold' }}>+100</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', marginLeft: 25, marginRight: 25 }}>

                        <View style={{ width: deviceWidth * 0.4, backgroundColor: '#fff', elevation: 2, padding: 20, borderRadius: 3 }}>
                            <Text style={{ color: '#929eb2', fontFamily: 'Khula-Bold' }}>RECUPERADOS</Text>
                            <Text style={{ fontSize: 35, fontFamily: 'Khula-Bold', color: '#27a845' }}>753</Text>
                            <Text style={{ color: '#27a845', fontFamily: 'Khula-Bold' }}>+100</Text>
                        </View>

                        <View style={{ width: deviceWidth * 0.4, backgroundColor: '#fff', elevation: 2, padding: 20, borderRadius: 3 }}>
                            <Text style={{ color: '#929eb2', fontFamily: 'Khula-Bold' }}>FATAIS</Text>
                            <Text style={{ fontSize: 35, fontFamily: 'Khula-Bold', color: '#6e7780' }}>753</Text>
                            <Text style={{ color: '#6e7780', fontFamily: 'Khula-Bold' }}>+100</Text>
                        </View>

                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 30, marginTop: 30 }}>
                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.13, padding: 10 }}>
                                <Text style={{ color: '#303e4f', fontFamily: 'Khula-Bold', fontSize: 18 }}>Estado/UF</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#fe083b', fontFamily: 'Khula-Bold', fontSize: 18 }}>C</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#017bff', fontFamily: 'Khula-Bold', fontSize: 18 }}>A</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#27a845', fontFamily: 'Khula-Bold', fontSize: 18 }}>R</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#6e7780', fontFamily: 'Khula-Bold', fontSize: 18 }}>F</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 30, marginTop: 5 }}>
                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.13, padding: 10 }}>
                                <Text style={{ color: '#3a4a5a', fontFamily: 'Khula-Bold', fontSize: 14 }}>Kerala</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#3a4a5a', fontFamily: 'Khula-Bold', fontSize: 14 }}>1000</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#3a4a5a', fontFamily: 'Khula-Bold', fontSize: 15 }}>-</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#3a4a5a', fontFamily: 'Khula-Bold', fontSize: 14 }}>100</Text>
                            </View>

                            <View style={{ backgroundColor: '#f9fafc', width: deviceHeight * 0.06, padding: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#3a4a5a', fontFamily: 'Khula-Bold', fontSize: 14 }}>200</Text>
                            </View>
                        </View>



                    </View>

                </View>




            </ScrollView>
            <Modal
                onClosed={() => setVisibleModal(false)}
                style={{ height: deviceHeight * 0.80, backgroundColor: '#fff', borderTopRightRadius: 6, borderTopLeftRadius: 6, elevation: 11 }}
                animationDuration={200}
                swipeToClose={true}
                entry="bottom"
                backButtonClose={true}
                position={'bottom'}
                aboveStatusBar={true}
                isOpen={visibleModal}>
                <View>
                    <TextInput
                        autoCapitalize={false}
                        placeholder={"Digite o nome do país (EN-US)"}
                        value={search}
                        onChangeText={(search) => handleSearch(search)}
                        style={{ marginTop: 10, fontSize: 18, fontFamily: 'Khula', borderBottomWidth: 2, borderBottomColor: '#ea5569', height: 60, width: deviceWidth * 0.9, alignSelf: 'center' }}
                    />
                </View>

                <ScrollView style={{ marginTop: 10 }}>

                    <FlatList
                        data={countriesFilter}
                        keyExtractor={(country) => country.slug}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleItem(item)} activeOpacity={.8} style={{ flexDirection: 'row', width: deviceWidth, alignItems: 'center', padding: 15, }}>
                                <Icon name="map-marker-outline" size={25} color="#ea5569" />
                                <Text style={{ fontSize: 18, fontFamily: 'Khula-Bold', color: '#2a384b', marginLeft: 10, alignSelf: "center" }}>{item.Country} - {item.ISO2}</Text>
                            </TouchableOpacity>)
                        }
                    />

                </ScrollView>


            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    topBack: {

        backgroundColor: '#212b46',
        height: deviceHeight * 0.35,
        elevation: 0
    }
})