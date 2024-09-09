import { View, Text, Pressable , StyleSheet } from 'react-native'
import React from 'react'
import { data } from '@/constants/data'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { vh } from '@/helpers/valuechangers';
import { theme } from '@/constants/theme';
import CustomText from './CustomText';


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
       
        <Animated.View entering={FadeInRight.duration((index+1)*200).delay(1000).damping(14)} style={isActive == item ?style.activeitem:style.categoryitem}>
            <Pressable onPress={()=>{
            console.log(item)
            isActive == item ? null : handleChangeCategory(item)
            
        }}>
                <CustomText text={item} style={isActive == item ? {color:"white",textTransform:"capitalize"}:{textTransform:"capitalize"}}></CustomText>
                </Pressable>
        </Animated.View>
    )
}

const style =StyleSheet.create({
    categoryitem:{
        minHeight:25,
        height:vh(5),
        padding:10,
        borderRadius:10,
        borderCurve:"continuous",
        backgroundColor: theme.colors.white,
        justifyContent:"center",
        alignItems:"center"
    },
    activeitem:{
        minHeight:25,
        height:vh(5),
        padding:10,
        borderRadius:10,
        borderCurve:"continuous",
        backgroundColor: theme.colors.gray,
        justifyContent:"center",
        alignItems:"center"
    },
    
    flatlist:{
        marginTop:20,
        flexDirection:"row",
        height: vh(8),
        gap:10,
    }
})