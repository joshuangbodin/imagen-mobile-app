import { Pressable, StyleSheet, Text, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { theme } from "@/constants/theme";
import { getHeight, vh, vw } from "@/helpers/valuechangers";
interface props {
  columns: number;
  index: number;
  image: string;
  imageHeight:number;
  imagewidth:number;
}
const ImageCard = ({ columns,image,imageHeight,imagewidth, index }: props) => {


  const getLeftGap = (number: number) => {
    return number % columns === 0;
  };


  return (
    <Pressable
        style={[styles.cont,{height:getHeight(imagewidth , imageHeight)}, !getLeftGap(index) && { marginLeft: vw(2) }]}
    >
      <Image source={{uri:image}} style={styles.image}></Image>
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  cont: {
    width: "auto",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: vw(2),
    height: "auto",
    backgroundColor: theme.colors.gray,
  },
  image: {
    height: 300,
    width:'auto',
    objectFit:'cover'
  },
});
