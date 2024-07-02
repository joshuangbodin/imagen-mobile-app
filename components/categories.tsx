import { View, Text, Pressable , StyleSheet } from 'react-native'
import React from 'react'
import { data } from '@/constants/data'
import Animated, { FadeInLeft } from 'react-native-reanimated';


interface Props{
    item: string|any;
    isActive?: any;
    index:any;
    handleChangeCategory: (p:any) => void
}

interface catprops{
    activeCategory : string|any;
    handleChangeCategory: (p:any) => void
}
const Categories = ({activeCategory,handleChangeCategory}:catprops) => {
  return (
  <View style={style.flatlist}>
    {data.category.map(
        (item,index) => (
            <CategoryItem index={index} key={item} item={item} handleChangeCategory={handleChangeCategory} isActive={activeCategory} />
        )
    )}
  </View>
  )
}

export default Categories


const CategoryItem =({item ,index, isActive , handleChangeCategory}:Props)=>{
    return (
       
        <Animated.View entering={FadeInLeft.duration((index+1)*200).delay(1000).damping(14)} style={isActive == item ?style.activeitem:style.categoryitem}>
            <Pressable onPress={()=>{
            console.log(item)
            isActive == item ? null : handleChangeCategory(item)
            
        }}>
                <Text style={isActive == item ? {color:"white",textTransform:"capitalize"}:{textTransform:"capitalize"}}>{item}</Text>
                </Pressable>
        </Animated.View>
    )
}

const style =StyleSheet.create({
    categoryitem:{
        minHeight:25,
        padding:10,
        borderRadius:10,
        borderCurve:"continuous",
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },
    activeitem:{
        minHeight:25,
        padding:10,
        borderRadius:10,
        borderCurve:"continuous",
        backgroundColor:"gray",
        justifyContent:"center",
        alignItems:"center"
    },
    
    flatlist:{
        marginTop:20,
        flexDirection:"row",
        height: "8%",
        gap:10,
    }
})