import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import Product from './Product'

const Products = () => {
  return (
    <View style={styles.productsContainer}>
      <View
        style={{
          position: 'absolute',
          top: -18,
          width: 125,
          height: 10,
          backgroundColor: "#fff",
          borderRadius: 10
        }}
      ></View>
      {/* make this scrollview */}
        <View style={styles.products}>
          <Product />
          <Product />
          <Product />
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>Add all to cart</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    productsContainer: {
        height: "50%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 27,
        paddingVertical: 35
    },
    products: {
      height: "100%",
      width: "100%",
      justifyContent: 'space-between'
    },
    addButton: {
      position: 'absolute',
      bottom: 20,
      width: '95%',
      backgroundColor: '#015DD3',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 18,
      borderRadius: 10
    },
    buttonText: {
      color: "#fff",
      fontSize: 18
    }
})

export default Products