import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'

const HomeWatchList = () => {
    const [coins, setCoins] = useState([
        {
            id: 1,
            name: "Ethereum",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/eth.png",
            nick: "Eth",
            price: 123,
            drop: -12,
        },
        {
            id: 2,
            name: "Ripple",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
            nick: "xrp",
            price: 123,
            drop: -12,
        },
        {
            id: 3,
            name: "Bitcoin Cash",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/bch.png",
            nick: "Bch",
            price: 123,
            drop: -12,
        },
        {
            id: 4,
            name: "Litecoin",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/ltc.png",
            nick: "Ltc",
            price: 123,
            drop: -12,
        },
        {
            id: 5,
            name: "Stellar Lumens",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
            nick: "Xlm",
            price: 123,
            drop: -12,
        },
        {
            id: 6,
            name: "Bitcoin",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/btc.png",
            nick: "Btc",
            price: 123,
            drop: -12,
        },

    ]);
    return (
        <View style={{ marginLeft: 20, marginRight: 0 }}>
            <View>
                <Text style={styles.textContainer}>Watchlist</Text>
            </View>
            <View style={{ paddingTop: 10 }}>
                <View style={styles.container1}>
                    <View>
                        {coins.map((coin) => (
                            <View key={coin.id}>
                                <View style={styles.coinStyle}>
                                    <View>
                                        <Image
                                            source={{ uri: coin.icon }}
                                            style={{ width: 35, height: 35 }}
                                        />

                                    </View>
                                    <View style={{ marginRight: 20,paddingLeft:15 ,flex:1}}>
                                        <Text style={{fontSize:15,fontWeight:"400",color:"#000"}}>{coin.name}</Text>
                                        <Text style={{color:"#5d616d",fontWeight:"400",fontSize:13}}>{coin.nick}</Text>
                                    </View>
                                    <View style={{marginRight:25}}>
                                        <Text style={{fontSize:15}}>${coin.price}</Text>
                                        <Text style={{fontSize:12}}>{coin.drop}%</Text>
                                    </View>


                                </View>

                            </View>
                        ))}
                    </View>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textContainer: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#000",
        paddingTop: 5,
        //marginLeft: 20
    },
    container1: {
        height: 420,
        width: 400,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#ddd",
    },
    coinStyle: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 14,
        justifyContent: 'space-between',
        paddingBottom: 14

    }
})
export default HomeWatchList;