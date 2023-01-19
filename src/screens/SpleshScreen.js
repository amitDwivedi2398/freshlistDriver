import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity,Image } from 'react-native';


const SpleshScreen = ({navigation}) => {
  setTimeout(async () => {
      navigation.replace('Login');
  }, 1000);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width:300,height:250}} source={require('../assets/images/delevryBoy.png')} />
      </View>
    </SafeAreaView>
  );
};

export default SpleshScreen;
