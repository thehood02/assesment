import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import LeftArrow from '../../../assets/icons/chevron_big_left.svg'
import DownArrow from '../../../assets/icons/chevron_big_down.svg'

const Header = () => {
  return (
    <View style={styles.header}>
        <View>
          <LeftArrow height={25} width={25} fill={"#2E3A59"} />
        </View>

        <View style={{flexDirection:'row'}}>
          <Image source={require("../../../assets/images/girl-glasses.jpg")} style={styles.profileImage} />
          <View>
            <Text style={{fontSize: 18, color: "#fff"}}>Influencer's Name</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: "#fff"}}>Follow</Text>
              <DownArrow height={18} width={18} fill={"#fff"} />
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
        paddingHorizontal: 24
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 50,
      marginRight: 15
    },
    menu: {
      height: 7,
      width: 7,
      backgroundColor: '#bbb',
      borderRadius: 5,
      marginBottom: 2
    }
})

export default Header