import React from 'react'
import { StyleSheet, SafeAreaView, Image, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

      <View style={styles.close}>
        <MaterialCommunityIcons name='close' color='white' size={35} />
      </View>

      <View style={styles.delete}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size={35}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  close: {
    position: 'absolute',
    flexDirection: 'row',
    left: 30,
    top: 55,
  },

  delete: {
    position: 'absolute',
    flexDirection: 'row',
    right: 45,
    top: 55,
  },
})

export default ViewImageScreen
