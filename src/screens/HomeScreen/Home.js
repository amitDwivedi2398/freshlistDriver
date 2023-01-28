import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../ColorScreen';
import LocationButton from '../../components/LocationButton';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import axiosRequest from '../../axios';
import Geolocation from '@react-native-community/geolocation';


const Home = ({ navigation }) => {
    Geolocation.getCurrentPosition(data => console.log(data.coords.latitude));
    console.log(Geolocation);
    const [assignedList, setAssignedList] = useState([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        getData();
      }, [isFocused])
      useEffect(() => {
        getLoginData();
      }, [isFocused])
    const user= useSelector(state=>state.users)
    console.log('user <<<<<<<<<<<<',user)
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
        {
            id: '4',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: '#0018111306',
            status: 'Delivered'
        },
        {
            id: '5',
            product: '1 Product(s)',
            date: '03 jan 2023',
            price: '₹ 77',
            title: '#0018111306',
            status: 'Delivered'
        },


    ]);
 
    const getLoginData = async () => {
        try {
            let result = await axiosRequest.get('/admin/assinged_product_list/63d3686cefb3c008d02a8101');
            // console.log(result.data.data.length>0);
            if (result?.status === 200 && result?.data?.data?.length>0) {
                let response = await result.data.data;
                setAssignedList(response);
                console.log('assigned list =>>>>>>>>>>.', response)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        console.log('userData??????', data.user._id);
    };
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ffffcc', '#ccffff', '#ffffcc']}
            style={styles.container}>
            <ScrollView style={{}}>
                <View>
                    {assignedList?.map((item) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')} key={item?._id}>
                            <LinearGradient
                                colors={['#ffffcc', '#ccffff', '#ffffcc']} style={styles.mainContainer} >
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image source={require('../../assets/images/avatar.png')} style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 50,
                                    }} />

                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.title}>{item.orderId}</Text>
                                        <Text style={[styles.title, { fontWeight: '400' }]}>{item.product.product_name}</Text>
                                        <Text style={[styles.title, { fontWeight: '400' }]}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={[styles.title]}>{item.product.buying_price}</Text>
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

export default Home;
