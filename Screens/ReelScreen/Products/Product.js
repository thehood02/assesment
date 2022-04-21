import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import Tick from '../../../assets/icons/circle_check.svg'
import Share from '../../../assets/icons/share.svg'
import Heart from '../../../assets/icons/heart_outline.svg'

const Product = () => {
  return (
    <View style={styles.productContainer}>
        <View>
            <Image source={require("../../../assets/images/guy.jpg")} style={styles.productImage} />
        </View>

        <View style={{width:"65%"}}>
            <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <View style={styles.brand}>
                        <Image source={require("../../../assets/images/girl.jpg")} style={styles.brandImage} />
                        <Text>Brand Name</Text>
                    </View>
                    <Text>Product Name</Text>
                </View>
                <Tick height={30} width={30} fill={"#011E46"} />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Rs 3500</Text>
                    <Text style={{color: "blue", marginLeft: 15}}>MP: 1500</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                    <Share height={20} width={20} fill={"#99A5B5"} />
                    <Heart height={20} width={20} fill={"#99A5B5"} />
                </View>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productImage: {
        height: 80,
        width: 100,
        borderRadius: 10
    },
    brand: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    brandImage: {
        height: 30,
        width: 30,
        marginRight: 8,
    }
})

export default Product