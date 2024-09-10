import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { theme } from "@/constants/theme";
import { getNoOfColumns, vh, vw } from "@/helpers/valuechangers";
import ImageCard from "./ImageCard";

interface props{
  data : Image[]
}

const Grid = ({data}:props) => {

  return (
    <MasonryFlashList
      data={data}
      contentContainerStyle={{}}
      style={{gap:10}}
      numColumns={getNoOfColumns()}
      renderItem={({item , index})=>(
        <ImageCard image={item.webformatURL} imageHeight={item.webformatHeight} imagewidth={item.webformatWidth} columns={getNoOfColumns()} index={index} />
      )}
    />
  );
};

export default Grid;

const styles = StyleSheet.create({});
