import { Pressable, StyleSheet, Text, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { theme } from "@/constants/theme";
import { vh, vw } from "@/helpers/valuechangers";
interface props {
  columns: number;
  index: number;
}
const ImageCard = ({ columns, index }: props) => {

    
  const getLeftGap = (number: number) => {
    return number % columns === 0;
  };


  return (
    <Pressable
      style={[styles.cont, !getLeftGap(index) && { marginLeft: vw(2) }]}
    >
      <Image style={styles.image}></Image>
      {/* <CustomText text={'Picture'} style={undefined}/> */}
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
  },
});
