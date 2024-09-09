import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh } from '@/helpers/valuechangers';

interface props{
    text : string;
    isHeader?: boolean;
    isSupporting?: boolean;
    isCapitalized?: boolean; 
    style: any
}

const CustomText = ({text}:props) => {
  return (
    
      <Text style={[styles.text]} >{text}</Text>
    
  )
}

export default CustomText

const styles = StyleSheet.create({
    text:{
        fontSize: vh(1.8),
        color:'#fff'
    }
})