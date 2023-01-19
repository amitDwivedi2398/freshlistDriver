import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../ColorScreen';
import LocationButton from '../../components/LocationButton';


const OrderScreen = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: '1',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: '#0018111306',
            status: 'Delivered'
        },
        {
            id: '2',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: '#0018111306',
            status: 'Delivered'
        },
        {
            id: '3',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: '#0018111306',
            status: 'Delivered'
        },


    ]);
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ffffcc', '#ccffff', '#ffffcc']}
            style={styles.container}>
            <ScrollView style={{}}>
                <View>
                    {data?.map((item) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                            <LinearGradient
                                colors={['#ffffcc', '#ccffff', '#ffffcc']} style={styles.mainContainer} >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image source={require('../../assets/images/avatar.png')} style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 50,
                                    }} />

                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={[styles.title, { fontWeight: '400' }]}>{item.product}</Text>
                                        <Text style={[styles.title, { fontWeight: '400' }]}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={[styles.title]}>{item.price}</Text>
                                    <Text style={[styles.title, { color: '#767676' }]}>{item.status}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
            <LocationButton />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        elevation: 10,
        shadowColor: 'black',
        width: '96%',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10
    },
})

export default OrderScreen;
