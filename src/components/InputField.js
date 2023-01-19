import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
  color,
  pcolor,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        width: '95%',
        borderRadius: 5,
        borderColor: 'blue',
        padding: 10,
        alignSelf: 'center',
        marginBottom: 20,
        alignItems: 'center'
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          value={value}
          color={color}
          onChangeText={onChangeText}
          placeholder={label}
          placeholderTextColor={pcolor}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          value={value}
          color={color}
          onChangeText={onChangeText}
          placeholder={label}
          placeholderTextColor={pcolor}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
