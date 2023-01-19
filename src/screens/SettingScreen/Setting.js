import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../ColorScreen';
import LinearGradient from 'react-native-linear-gradient';



export default function Setting({navigation }) {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: 'User Name',
            status: 'user@demo.com'
        },
    ];

    return (
        <LinearGradient
         start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ffffcc', '#ccffff', '#ffffcc']}
         style={{ flex: 1, backgroundColor: '#F3F3F3' }} >
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>
                                <Text style={styles.topTextStyle} >Setting</Text>
                                <Text style={[styles.topTextStyle, { fontSize: 13, marginVertical: 10, marginTop: 0 }]}>Profile & App Setting</Text>
                                <LinearGradient colors={['#ffffcc', '#ccffff', '#ffffcc']} style={styles.mainContainer}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row',padding:8}} >
                                        <View style={styles.sectionStyle} >
                                            <Image source={require('../../assets/images/avatar.png')} style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: 50,
                                            }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={styles.title}>{item.title}</Text>
                                                <Text style={[styles.title, { fontWeight: '400' }]}>{item.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{}}>
                                        {/* <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate('EditProfile')} >
                                            <Text>Edit Profile</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity> */}
                                        <TouchableOpacity style={styles.btnStyle} >
                                            <Text>Change Password</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnStyle}>
                                            <Text>Earning</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btnStyle]} >
                                            <Text>Payment Account</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btnStyle,]} >
                                            <Text style={{color:'red'}}>Logout</Text>
                                            <AntDesign name="login" size={20} color="#666"/>
                                        </TouchableOpacity>
                                    </View>
                                </LinearGradient>
                                <LinearGradient colors={['#ffffcc', '#ccffff', '#ffffcc']} style={styles.mainContainer}>
                                    <View style={{}}>
                                        <TouchableOpacity style={styles.btnStyle} >
                                            <Text>Notification</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnStyle} >
                                            <Text>Privacy Policy</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btnStyle]} >
                                            <Text>Terms & Conditions</Text>
                                            <MaterialIcons name="keyboard-arrow-right" size={25} color="#666"/>
                                        </TouchableOpacity>
                                    </View>
                                </LinearGradient>
                            </View>
                        )}
                    />
                </LinearGradient>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 1
    },
    mainContainer: {
        elevation: 10,
        shadowColor: 'black',
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom:10,
    },
    topTextStyle: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 10,
        marginTop: 10,
    },
    sectionStyle: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    btnStyle:{
        borderTopWidth:2,
        borderColor:'#D3D3D3',
        height:45,
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})
