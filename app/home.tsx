import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
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
import Grid from "@/components/Grid";
import { apiCall } from "@/api/api";

const home = () => {
  //active category
  const [activeCategory, setActiveCategory] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  useEffect(()=>{
    getImage();
  },[])

  const handleChangeCategory = (p: string) => {
    setActiveCategory(p);
  };

  const getImage = async (params = { page: 1 }, append = false) => {
    let res = await apiCall(params);
    
    console.log('Got result :' , res)

    if(res.success){
      if(append){
       
      setImages([...images,...res.data.hits])
      }
     
      setImages(res.data.hits)
    }
  };

  const handleSearch = (text:string)=>{
    console.log('Searched for :', text)
  }

 

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

      <ScrollView>
        {/* search bar */}
        <SearchBar  handleSearch={handleSearch}/>
        {/* Category List */}
        <ScrollView contentContainerStyle={{ gap: 10 }} horizontal>
          <Categories
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </ScrollView>
        {/* Grid */}
        <View style={{ minHeight: 5 }}>
          <Grid data={images} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: vh(6),
    paddingBottom: 20,
    marginBottom: 10,
  },
  headertext: {
    fontSize: vh(3.5),
    fontWeight: "bold",
  },

  category: {},
});

export default home;
