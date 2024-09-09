import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { theme } from "@/constants/theme";
import { vw } from "@/helpers/valuechangers";

const Grid = () => {
  return (
    <MasonryFlashList
      data={[
        { height: 150 },
        { height: 300 },
        { height: 250 },
        { height: 100 },
      ]}
      contentContainerStyle={{}}
      style={{gap:10}}
      numColumns={2}
      renderItem={({item})=>(
        <View style={{backgroundColor:theme.colors.gray , width:vw(40) , height:item.height}}>s</View>
      )}
    />
  );
};

export default Grid;

const styles = StyleSheet.create({});
