import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { theme } from "@/constants/theme";
import { getNoOfColumns, vh, vw } from "@/helpers/valuechangers";
import ImageCard from "./ImageCard";

const Grid = () => {
  const isNotLast = () =>{

  }
  return (
    <MasonryFlashList
      data={[
        { height: 150 },
        { height: 300 },
        { height: 250 },
        { height: 100 },
        { height: 150 },
        { height: 300 },
        { height: 250 },
        { height: 100 },
      ]}
      contentContainerStyle={{}}
      style={{gap:10}}
      numColumns={getNoOfColumns()}
      renderItem={({item , index})=>(
        <ImageCard columns={getNoOfColumns()} index={index} />
      )}
    />
  );
};

export default Grid;

const styles = StyleSheet.create({});
