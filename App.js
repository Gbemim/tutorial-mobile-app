import React from 'react'
import { StyleSheet, SafeAreaView, Image, View, Text } from 'react-native'

import AppButton from './app/components/AppButton'
import ViewImageScreen from './app/Screens/ViewImageScreen'
import WelcomeScreen from './app/Screens/WelcomeScreen'
import AppCard from './app/components/AppCard'
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen'

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
    // <WelcomeScreen />
    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <AppCard
    //     title='Red jacket for sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>

    <ViewImageScreen />

    // <ListingDetailsScreen />
  )

  // <WelcomeScreen />
}
