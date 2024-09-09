import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/valuechangers";
import CustomText from "./CustomText";

interface props{
    text? : string;
    style?:any;
    textStyle?:any;
    onPress?: ()=>void
}

const CustomButton = ({text , style , textStyle , onPress}:props) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <Animated.View style={[styles.button, style]}>
        <CustomText text="Explore Now" style={[styles.btntext , textStyle]}/>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    button:{
        width: vw(70),
        justifyContent:"center",
        alignItems:"center",
        height: vh(8),
        backgroundColor:"black",
        borderRadius:20,
      },
      btntext:{
        color:"white",
        fontWeight:"semibold",
        fontSize: vh(1.8)
      }
});
