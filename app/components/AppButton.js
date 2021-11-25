import React from 'react'
import { Text, StyleSheet, Platform, View } from 'react-native'

import color from '../config/color'

function AppButton({ title }) {
  const login = 'lOGIN'
  return (
    <View>
      <View style={styles.login}>
        <Text style={styles.text}>{login}</Text>
      </View>
      <View style={styles.register}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: color.primary,
    height: 60,
    width: '90%',
    position: 'absolute',
    bottom: 80,
    borderRadius: 100,
    margin: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  register: {
    backgroundColor: color.secondary,
    height: 60,
    width: '90%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 100,
    margin: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: color.white,
    alignSelf: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

export default AppButton
