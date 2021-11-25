import React from 'react'
import { StyleSheet, SafeAreaView, Image, View } from 'react-native'

import colors from '../config/color'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      {/* Main background image */}
      <Image
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          backgroundColor: colors.black,
        }}
        source={require('../assets/chair.jpg')}
      />

      <SafeAreaView
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: colors.primary,
          height: 50,
          width: 50,
          left: 30,
          top: 45,
        }}
      />

      <SafeAreaView
        style={{
          position: 'absolute',
          flexDirection: 'row',
          backgroundColor: colors.secondary,
          height: 50,
          width: 50,
          right: 30,
          top: 45,
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ViewImageScreen
