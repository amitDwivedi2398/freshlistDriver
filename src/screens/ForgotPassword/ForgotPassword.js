import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../ColorScreen';


const ForgotPassword = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Image source={require('../../assets/images/delevryBoy.png')} style={{ width: '100%', height: 200 }} />
                <View>
                    <View style={styles.mainContainer} >
                        <Text style={styles.welcomeTitle} >Forgot Password</Text>
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder='Phone Number'
                            placeholderTextColor='#333'
                            color='#333'
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} >
                            <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>Send OTP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    welcomeTitle:{
        color:colors.black,
        fontSize:18,
        fontWeight:'600',
    },
    loginTxt:{
        color:colors.primary,
    },
    input:{
        borderWidth:1,
        width:'95%',
        borderRadius:5,
        borderColor:'blue',
        padding:10,
        alignSelf:'center',
        marginBottom:20
    },
    mainContainer:{
        padding:10,marginVertical:15
    },
    loginBtn:{
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:'95%',
        alignSelf:'center',
        borderRadius:5,
        marginVertical:10
    }

})

export default ForgotPassword;
