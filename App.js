import React from 'react'
import { StyleSheet, SafeAreaView, Image, View, Text } from 'react-native'

import AppButton from './app/components/AppButton'
import ViewImageScreen from './app/Screens/ViewImageScreen'
import WelcomeScreen from './app/Screens/WelcomeScreen'

export default function App() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    //   <AppButton title='Login' />
    // </View>
    <WelcomeScreen />
  )

  // <WelcomeScreen />
  // <ViewImageScreen />
}
