import { View, Text , StyleSheet, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {  useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather, FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { SearchBar } from 'react-native-screens'
import { vh } from '@/helpers/valuechangers'
import Categories from '@/components/categories'


const home = () => {
    //search const
    const [search , setSearch] = useState("")

    //active category
    const [activeCategory, setActiveCategory] = useState("")
    //changeactivecategory
    const handleChangeCategory = (p:string)=>{
        setActiveCategory(p);
    }


    //safe area view 
    const {top} = useSafeAreaInsets()
    const paddingTop = top>0? top+10 : top+30
  return (
    <View style={[style.container,{paddingTop}]}>
      <View style={style.header}>
        <Pressable>
            <Text style={style.headertext}>Imagen</Text>
        </Pressable>
        <Pressable>
            <FontAwesome6 size={25} color={"darkergray"} name="bars-staggered"/>
        </Pressable>
      </View>
      <View style={style.searchbar}>
        <Feather size={20} color={"gray"} name="search"/>
        <TextInput placeholder=' Search for photos...' style={style.textinput} value={search} onChangeText={(value) => setSearch(value)}/>
        { search&&<Pressable style={style.cancel}>
            <Ionicons size={25} color={"gray"} name="close"/>
        </Pressable>}
      </View>
      <ScrollView contentContainerStyle={{gap:10}} horizontal>
        <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory}/>
      </ScrollView>
    </View>
  )
}

const style =  StyleSheet.create(
    {
        container:{
            flex:1,
            paddingHorizontal:20,
        }, 
        header:{ 
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        headertext:{
            fontSize:25,
            fontWeight:"bold"
        }, 
        searchbar:{
            flexDirection:"row",
            width:"100%",
            justifyContent:"space-between",
            marginTop:35,
            backgroundColor:"#fff",
            minHeight: 45,
            maxHeight:50,
            alignItems:"center",
            borderRadius: 20,
            borderCurve:"continuous",
            paddingHorizontal:10,
            elevation:2,
            shadowColor: "rgba(240,230,240,.8)",
            shadowOffset:{
                width:1,
                height:5
            }

        },
        textinput:{
           flex:1, 
           height:"100%",
           marginHorizontal:10,
           borderColor:"#fff",
           borderRadius: 20,
           borderCurve:"continuous",
           fontSize: vh(1.5),
        },
        category:{
            
        },
        cancel:{
        backgroundColor:"rgba(250 , 250 , 250 , 0.8)"
        }
    }
)

export default home