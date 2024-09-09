import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons } from '@expo/vector-icons'
import { vh, vw } from '@/helpers/valuechangers'

const SearchBar = () => {
     //search const
     const [search , setSearch] = useState("")

  return (
    <View style={styles.searchbar}>
    <Feather size={vh(3)} color={"gray"} name="search"/>
    <TextInput placeholder=' Search for photos...' style={styles.textinput} value={search} onChangeText={(value) => setSearch(value)}/>
    { search&&<Pressable style={styles.cancel}>
        <Ionicons size={vh(3)} color={"gray"} name="close"/>
    </Pressable>}
  </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbar:{
        flexDirection:"row",
        width:vw(90),
        justifyContent:"space-between",
        backgroundColor:"#fff",
        height: vh(6.5),
        alignItems:"center",
        borderRadius: 15,
        borderCurve:"continuous",
        paddingHorizontal:10,
        alignSelf:'center',
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
       fontSize: vh(1.8),
    },
    cancel:{
        backgroundColor:"rgba(250 , 250 , 250 , 0.8)"
        }
})