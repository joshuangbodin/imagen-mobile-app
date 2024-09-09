import { View, Text , Image , StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { vh, vw } from '@/helpers/valuechangers'
import {LinearGradient} from "expo-linear-gradient"
import Animated, { FadeInDown } from "react-native-reanimated"
import { useRouter } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const index = () => {
  const router = useRouter()
  return (
    <View style={style.container}>
      <Image style={style.image} source={require("../assets/images/splashimage.jpg")}/>
     
      <Animated.View entering={FadeInDown.duration(650)} style={{flex:1}}>
      <LinearGradient style={style.gradient} colors={["transparent" , "rgba(255 , 255 , 255,.3)","rgba(255 , 255 , 255,.8)","rgb(255,255,255)" , "white" ]}
      start={{x:0.5 , y:0}} end={{x:0.5 , y:0.8}}>
        
        <View style={style.welcomecont}>
          <Animated.Text style={style.header} >Imagen</Animated.Text>
          <Animated.Text style={style.support} >Beauty and Art in every capture.</Animated.Text>
          <CustomButton text='Explore Now' style={style.button}/>
          </View>

      </LinearGradient>
      </Animated.View>
        
    </View>
  )
}

const style = StyleSheet.create({
  image:{
    width: vw(100),
    height: vh(100),
    position:"absolute",
    objectFit:"cover",
    transform:"rotate(180deg)"
  },
  container:{
    width:vw(100),
    height:vh(100),
    flex:1,
  },
  gradient:{
    position:"absolute",
    bottom:0,
    width:vw(100),
    height:"60%"
  },
  welcomecont:{
    width: vw(100),
    height:"60%",
    position:"absolute",
    bottom:0,
    padding:50,
    justifyContent:"space-around"
    
  },
  header:{
    fontSize:35,
    textTransform:"capitalize",
    alignSelf:"center",
    fontWeight:"bold",
  },
  support:{
    fontSize:15,
    textTransform:"capitalize",
    alignSelf:"center",
    fontWeight:"semibold"
  },
  button:{
    width:vw(70),
    height: vh(7),
    alignSelf:'center',

  },
  btntext:{
    color:"white",
    fontWeight:"semibold"
  }
})

export default index