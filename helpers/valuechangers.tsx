import { Dimensions, useWindowDimensions } from "react-native";


const window = Dimensions.get("screen")
var windowwidth = window.width
var windowheight = window.height

export const vw =(p:number)=>{
    const percentage = p * (windowwidth/100);
    return percentage
}

export const vh =(p:number)=>{
    const percentage = p * (windowheight/100);
    return percentage
}