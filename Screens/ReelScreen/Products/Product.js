import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import DidactGothicRegular from '../../../CustomComponents/DidactGothicRegular'
import NotoSansMedium from '../../../CustomComponents/NotoSansMedium'

import Tick from '../../../assets/icons/circle_check.svg'
import Share from '../../../assets/icons/share.svg'
import Heart from '../../../assets/icons/heart_outline.svg'

const Product = () => {
  return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.productContainer}>
            <View>
                <Image source={require("../../../assets/images/guy.jpg")} style={styles.productImage} />
            </View>
            <View style={{width:"65%"}}>
                <View style={{marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <View style={styles.brand}>
                            <Image source={require("../../../assets/images/girl.jpg")} style={styles.brandImage} />
                            <DidactGothicRegular style={styles.brandName}>Brand name</DidactGothicRegular>
                        </View>
                        <NotoSansMedium style={styles.productName}>Product Name</NotoSansMedium>
                    </View>
                    <Tick height={30} width={30} fill={"#011E46"} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <DidactGothicRegular style={styles.price}>Rs 3500</DidactGothicRegular>
                        <DidactGothicRegular style={styles.sellingPrice}>MP : Rs 1500</DidactGothicRegular>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Share height={20} width={20} fill={"#99A5B5"} style={{marginRight: 10}} />
                        <Heart height={20} width={20} fill={"#99A5B5"} />
                    </View>
                </View>
            </View>
        </View>
        {/* border */}
        <View
            style={{
                width: "85%",
                height: 1,
                backgroundColor: "#E6E8EC",
                marginVertical: 15
            }}
        ></View>

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
    brandName: {
        color:"#011E46", 
        fontSize:16
    },
    brandImage: {
        height: 30,
        width: 30,
        marginRight: 8,
        borderRadius: 10
    },
    productName: 
    {
        color: "#677890", 
        fontSize: 18
    },
    price: {
        color:"#677890", 
        fontSize: 16
    },
    sellingPrice: {
        color: "#015DD3", 
        marginLeft: 15, 
        fontSize: 16
    }
})

export default Product