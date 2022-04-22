import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import DidactGothicRegular from '../../../CustomComponents/DidactGothicRegular'
import NotoSansMedium from '../../../CustomComponents/NotoSansMedium'

import LeftArrow from '../../../assets/icons/chevron_big_left.svg'
import DownArrow from '../../../assets/icons/chevron_big_down.svg'

const Header = () => {
  return (
    <View style={styles.header}>
        <View>
          <LeftArrow height={30} width={30} fill={"#373737"} />
        </View>

        <View style={{flexDirection:'row', marginLeft: 20, marginRight: 'auto'}}>
          <Image source={require("../../../assets/images/girl-glasses.jpg")} style={styles.profileImage} />
          <View>
            <NotoSansMedium style={{fontSize: 20, color: "#fff"}}>Influencer's Name</NotoSansMedium>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <DidactGothicRegular style={styles.followButton}>Follow</DidactGothicRegular>
              <DownArrow height={16} width={16} fill={"#F2F7FD"} style={{marginTop: 5}} />
            </View>
          </View>
        </View>
        
        <View>
          <View style={styles.menu}></View>
          <View style={styles.menu}></View>
          <View style={styles.menu}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15
    },
    profileImage: {
      height: 55,
      width: 55,
      borderRadius: 50,
      marginRight: 15
    },
    followButton: {
      color: "#F2F7FD", 
      fontSize: 16, 
      marginRight: 8
    },
    menu: {
      height: 7,
      width: 7,
      backgroundColor: '#B3BBC7',
      borderRadius: 5,
      marginBottom: 2
    }
})

export default Header