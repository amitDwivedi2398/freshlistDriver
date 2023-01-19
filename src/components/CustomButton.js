import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
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
                    {label}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
