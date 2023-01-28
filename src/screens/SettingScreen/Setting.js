import React, { useEffect, useState, useRef } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../ColorScreen';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from 'react-native-raw-bottom-sheet';
import { Icon } from 'react-native-elements';


export default function Setting({ navigation }) {
    const bottomSheetRef = useRef();
    const bottomSheetRefTwo = useRef();
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
    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
        navigation.navigate('Splesh')
    }
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
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 8 }} >
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
                                <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate('ChangePassword')} >
                                    <Text>Change Password</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
                                </TouchableOpacity>
                                <View>
                                    <BottomSheet
                                        ref={bottomSheetRefTwo}
                                        closeOnDragDown={true}
                                        height={500}
                                        openDuration={250}
                                    >
                                        <LinearGradient colors={['#ffffcc', '#ccffff', '#ffffcc']}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#f1f3f6',
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Text style={styles.txtStyle}>Earning</Text>
                                            <Text style={styles.txtStyle}>₹ 0.00</Text>
                                            <Text style={{ color: '#333', fontSize: 15, fontWeight: '500', alignSelf: 'center' }}>21 jan 2023</Text>
                                            <View>
                                                <Text style={{ color: '#333', fontSize: 18, fontWeight: '600' }}>Request Payout</Text>
                                                <TextInput
                                                    style={styles.inputStyle}
                                                    placeholder="Enter Account"
                                                />
                                                <TextInput
                                                    style={styles.inputStyle}
                                                    placeholder="Amount"
                                                />
                                            </View>
                                            <TouchableOpacity style={styles.iconButton} >
                                                <LinearGradient colors={['#085d87', '#27c7bb']}
                                                    start={{ x: 0, y: 1 }}
                                                    end={{ x: 1, y: 0 }}
                                                    style={{
                                                        width: '95%',
                                                        height: 50,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: 10,
                                                        alignSelf: 'center',
                                                        marginVertical: 10
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            textAlign: 'center',
                                                            fontWeight: '700',
                                                            fontSize: 16,
                                                            color: '#fff',
                                                        }}>
                                                        Request Payout
                                                    </Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => {
                                                bottomSheetRefTwo.current.close();
                                            }}>
                                                <Text style={{ color: 'blue', fontSize: 15 }} >Close</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </BottomSheet>
                                </View>
                                <View>
                                    <BottomSheet
                                        ref={bottomSheetRef}
                                        closeOnDragDown={true}
                                        height={300}
                                        openDuration={250}
                                    >
                                        <LinearGradient colors={['#ffffcc', '#ccffff', '#ffffcc']}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: '#f1f3f6',
                                                alignItems: 'center',
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Text style={styles.txtStyle}>Earning</Text>
                                            <Text style={styles.txtStyle}>₹ 0.00</Text>
                                            <Text style={{ color: '#333', fontSize: 15, fontWeight: '500' }}>21 jan 2023</Text>
                                            <TouchableOpacity style={styles.iconButton} onPress={() => {
                                                bottomSheetRefTwo.current.open();
                                            }}>
                                                <LinearGradient colors={['#085d87', '#27c7bb']}
                                                    start={{ x: 0, y: 1 }}
                                                    end={{ x: 1, y: 0 }}
                                                    style={{
                                                        width: '95%',
                                                        height: 50,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: 10,
                                                        alignSelf: 'center',
                                                        marginVertical: 10
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            textAlign: 'center',
                                                            fontWeight: '700',
                                                            fontSize: 16,
                                                            color: '#fff',
                                                        }}>
                                                        Request Payout
                                                    </Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => {
                                                bottomSheetRef.current.close();
                                            }}>
                                                <Text style={{ color: 'blue', fontSize: 15 }} >Close</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </BottomSheet>
                                </View>
                                <TouchableOpacity style={styles.btnStyle} onPress={() => {
                                    bottomSheetRef.current.open();
                                }} >
                                    <Text>Earning</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnStyle]} >
                                    <Text>Payment Account</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnStyle,]} onPress={clearAsyncStorage} >
                                    <Text style={{ color: 'red' }}>Logout</Text>
                                    <AntDesign name="login" size={20} color="#666" />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                        <LinearGradient colors={['#ffffcc', '#ccffff', '#ffffcc']} style={styles.mainContainer}>
                            <View style={{}}>
                                <TouchableOpacity style={styles.btnStyle} >
                                    <Text>Notification</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnStyle} >
                                    <Text>Privacy Policy</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnStyle]} >
                                    <Text>Terms & Conditions</Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
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
        marginBottom: 10,
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
    btnStyle: {
        borderTopWidth: 2,
        borderColor: '#D3D3D3',
        height: 45,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // borderRadius: 6,
        // elevation: 2,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 2,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.5,
        width: '100%',
        justifyContent: 'center',
    },
    txtStyle: {
        color: '#333', fontSize: 25, fontWeight: '400', marginVertical: 10, alignSelf: 'center'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        height: 45,
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontSize: 16,
        alignSelf: 'center'
    }
})
