import { Dimensions } from "react-native";


const {width , height} = Dimensions.get('window');


export const vw =(percentage:number)=>{
    const value = (percentage*width)/100;
    return value
}

export const vh =(percentage:number)=>{
    const value = (percentage*height)/100;
    return value
}


export const getNoOfColumns = () =>{
    if(width > 1024){
        return 4
    }
    else if(width > 724 ){
        return 3
    }
    else{
        return 2
    }
}