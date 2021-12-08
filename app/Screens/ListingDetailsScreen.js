import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import AppText from '../components/AppText'
import color from '../config/color'

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>

      <View style={styles.listerContainer}>
        <Image
          style={styles.pic}
          source={require('../assets/mosh.jpg')}
        ></Image>
        <View style={styles.nameInfoContainer}>
          <AppText style={styles.name}>Mosh Hamedani</AppText>
          <AppText style={styles.numListing}>10 Listings</AppText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  detailsContainer: {
    padding: 20,
    paddingBottom: 10,
  },

  title: {
    marginBottom: 7,
    fontSize: 20,
  },

  subTitle: {
    color: color.secondary,
    fontWeight: 'bold',
  },

  listerContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },

  pic: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },

  nameInfoContainer: {
    flex: 1,
    padding: 10,
  },

  name: {
    fontSize: 16,
  },

  numListing: {
    fontSize: 14,
    color: color.grey,
  },
})

export default ListingDetailsScreen
