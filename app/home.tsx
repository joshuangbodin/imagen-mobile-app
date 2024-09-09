import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { vh } from "@/helpers/valuechangers";
import Categories from "@/components/categories";
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchBar from "@/components/SearchBar";
import { ExecutionEnvironment } from "expo-constants";

const home = () => {
  

  //active category
  const [activeCategory, setActiveCategory] = useState("");
  
  const handleChangeCategory = (p: string) => {
    setActiveCategory(p);
  };

  return (
    <ScreenWrapper style={[style.container]}>

      {/* header */}
      <View style={style.header}>
        <Text style={style.headertext}>Imagen</Text>

        <Pressable>
          <FontAwesome6
            size={vh(3.5)}
            color={"darkergray"}
            name="bars-staggered"
          />
        </Pressable>
      </View>

      {/* search bar */}
      <SearchBar />

      {/* Category List */}
      <ScrollView contentContainerStyle={{ gap: 10 }} horizontal>
        <Categories
          activeCategory={activeCategory}
          handleChangeCategory={handleChangeCategory}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headertext: {
    fontSize: vh(3.5),
    fontWeight: "bold",
  },

  category: {},
});

export default home;
