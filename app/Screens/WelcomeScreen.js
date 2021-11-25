import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { BlurView } from 'expo-blur'

import colors from '../config/color.js'
import AppButton from '../components/AppButton.js'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Main background image */}
      <BlurView >
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../assets/background.jpg')}
        />
      </BlurView>
      {/* The title + tagline */}
      <View
        style={{
          position: 'absolute',
          top: 80,
          alignSelf: 'center',
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
          }}
          source={require('../assets/logo-red.png')}
        />
        <Text style={{ fontWeight: 'bold' }}>Sell What You Don't Need</Text>
      </View>

      {/* Register and Login button */}
      <View>
        <AppButton title='login' />
      </View>

      <View>
        <AppButton title='Register' />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})
export default WelcomeScreen
