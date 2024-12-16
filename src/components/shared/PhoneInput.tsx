import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomText from './CustomText'

const PhoneInput: FC<PhoneInputProps> = ({ value, onChangeText, onBlur, onFocus }) => {
  return (
    <View style={styles.container}>
      <CustomText fontFamily='Medium' style={styles.text}>
        🇧🇯 +229  
      </CustomText>
      <TextInput
        placeholder='0164574072'
        keyboardType='phone-pad' 
        value={value} 
        maxLength={10}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={"#ccc"}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 15, 
        borderWidth: 1,
        borderColor: '#222',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    input: {
        fontSize: RFValue(13),
        fontFamily: "Madium",
        height: 45,
        width: "90%"
    }, 
    text: {
        fontSize: RFValue(13),
        fontFamily: "Medium",
        top: -1
    }
})

export default PhoneInput