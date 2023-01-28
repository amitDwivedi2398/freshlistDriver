import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChangePassword = () => {
    return (
        <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#ffffcc', '#ccffff', '#ffffcc']}
        style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
        <View style={{marginTop:20}}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Current password"
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="New password"
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Confirm new password"
            />
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
                        Update Password
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
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

export default ChangePassword;
