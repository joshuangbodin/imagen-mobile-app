import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface props{
    children: React.ReactNode,
    style: any;
}

const ScreenWrapper = ({children,style}:props) => {
    const {top} = useSafeAreaInsets()
    const paddingTop = top>0? top+10 : top+30
  return (
    <View  style={[{paddingTop} , style]}>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})