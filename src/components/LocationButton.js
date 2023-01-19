import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../screens/ColorScreen';
import Entypo from 'react-native-vector-icons/Entypo';


const LocationButton = () => {
    return (
        <View style={{ position: 'absolute', alignSelf: 'flex-end', height: '100%', justifyContent: 'flex-end', padding: 10 }}>
            <TouchableOpacity style={styles.statusBtn}>
                <Entypo name="location-pin" size={25} color="#fff" style={{ marginRight: 10 }} />
                <Text style={styles.statusTxt}>You are Online</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBtn: {
        backgroundColor: '#8EA85C',
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'flex-end',
        marginRight: 10,
        flexDirection: 'row',
    },
    statusTxt: {
        color: colors.white,
        fontSize: 15,
    }
})

export default LocationButton;
