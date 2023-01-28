import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  setTimeout(async () => {
    const value = await AsyncStorage.getItem('userData');
    if (value !== null) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  }, 1000);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#ffffcc', '#ccffff', '#ffffcc']}
        style={styles.mainGradient}>
        <Image
          style={{width: 250, height: 150, resizeMode: 'contain'}}
          source={require('../assets/images/logo.png')}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
