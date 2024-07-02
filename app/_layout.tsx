import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import React from 'react'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown:false,
      }}>

      </Stack.Screen>
      <Stack.Screen name='home' options={{
         headerShown:false,
      }}>

      </Stack.Screen>
    </Stack>
  )
}

export default _layout