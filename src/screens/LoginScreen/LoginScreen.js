import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import axiosRequest from '../../axios';
import { colors } from '../ColorScreen';
import { useDispatch } from 'react-redux';
import { sendLogin } from '../../redux/action/Actions';
import { useSelector } from 'react-redux';
import InputField from '../../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const user = useSelector(state => state);
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isFocused = useIsFocused();
    useEffect(() => {
        getData();
      }, [isFocused])
    const getData = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        dispatch(sendLogin(data))
        console.log('userData<<<<<', data);
    };
    const getLoginData = async () => {
        const body = {
            email,
            password
        }
        try {
            let result = await axiosRequest.post('/admin/login_driver', body);

            if (result.status === 200) {
                let response = await result.data;
                console.log('response=>>>>>>>>>>.', response)
                AsyncStorage.setItem('userData', JSON.stringify(response));
                navigation.navigate('Home')
            }
        }
        catch (error) {
            console.log(error)
        }
    }





    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ffffcc', '#ccffff', '#ffffcc']}
            style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
            <View style={{height:200,justifyContent:'center'}}>
            <Image source={require('../../assets/images/logo.png')} style={{alignSelf:'center' }} />
            </View>
                <View>
                    <View style={styles.mainContainer} >
                        <Text style={styles.welcomeTitle} >Welcome Back</Text>
                        <Text style={styles.loginTxt}>Login to continue</Text>
                    </View>
                    <View>
                        <InputField
                            placeholder="Email"
                            value={email}
                            color={'#333'}
                            pcolor={'#333'}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            icon={
                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color="#666"
                                    style={{ marginRight: 5 }}
                                />
                            }
                        />
                        <InputField
                            placeholder="password"
                            value={password}
                            color={'#333'}
                            pcolor={'#333'}
                            onChangeText={(text) => setPassword(text)}
                            keyboardType="password"
                            icon={
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={20}
                                    color="#666"
                                    style={{ marginRight: 5 }}
                                />
                            }

                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 15, color: '#333' }} >Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* <TouchableOpacity style={styles.loginBtn} onPress={getLoginData} >
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Login</Text>
                        </TouchableOpacity> */}
                        <CustomButton label={'Login'} onPress={getLoginData} />
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    welcomeTitle: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '600',
    },
    loginTxt: {
        color: colors.primary,
    },
    input: {
        borderWidth: 1,
        width: '95%',
        borderRadius: 5,
        borderColor: 'blue',
        padding: 10,
        alignSelf: 'center',
        marginBottom: 20
    },
    mainContainer: {
        padding: 10, marginVertical: 15
    },
    loginBtn: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 5,
        marginVertical: 10
    }
})

export default LoginScreen;
