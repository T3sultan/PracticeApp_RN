import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'

const HomeTopM = () => {
    const [coins, setCoins] = useState([
        {
            id: 1,
            name: "Ethereum",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/eth.png",
            nick: "Eth",
            price: 123,
            drop: -32,
        },
        {
            id: 2,
            name: "Ripple",
            icon:
                "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
            nick: "xrp",
            price: 123,
            drop: -42,
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
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "black", marginTop: 10 }}>Top Movers</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingTop: 20 }}
            >
                {coins.map((coin) => (
                    <View key={coin.id}>
                        <View style={styles.container}>
                            <View>
                                <Image
                                    source={{ uri: coin.icon }}
                                    style={{ height: 35, width: 35, marginTop: 15 }}
                                />
                            </View>
                            <View style={styles.containerText}>
                                <Text style={styles.nickText}>{coin.nick}</Text>
                                <Text style={styles.priceText}>${coin.price}</Text>
                            </View>
                            <View style={{paddingTop:15}}>
                                <Text style={styles.dropText}>${coin.drop}%</Text>
                            </View>

                        </View>
                    </View>

                ))}

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderColor: "#000",
        borderRadius: 10,
        marginLeft: 15,
        paddingHorizontal: 15,
    },
    containerText: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    nickText: {
        fontSize: 19,
        fontWeight: "bold",


    },
    priceText: {
        fontWeight: "400",
        fontSize: 12,
        paddingLeft: 5,
        color: "#5d616d"

    },
    dropText:{
        fontSize:30,
        fontWeight:"400",
        paddingLeft:5,
        color:"red",
    }
})
export default HomeTopM