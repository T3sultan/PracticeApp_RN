import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios'

const Portifolio = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/')
            .then(function (response) {
                setData(response.data);
                console.log("data is ", data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <Text style={styles.portoliText}>Portifolio Balance</Text>
                    <Text style={styles.dollerText}>$0.00</Text>
                    {data.map((coin) => (
                        <View key={coin.id}>
                            <View style={styles.coinId}>
                                <View >
                                    <Image
                                        source={{ uri: coin.image.large }}
                                        style={styles.coinImage}
                                    />

                                </View>
                                <View style={{ paddingLeft: 12, flex: 1 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "400" }}>{coin.name}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: "300", fontSize: 15 }}>$0.00</Text>
                                    <Text style={{ fontSize: 14, fontWeight: "300", color: "#5d616d" }}>0 {coin.symbol}</Text>
                                </View>


                            </View>

                        </View>
                    ))}
                </View>

            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container1: {
        paddingTop: 50,
        paddingHorizontal: 20,
        marginBottom: 80,
    },
    portoliText: {
        color: "#5d616f",
        fontSize: 15,
        fontWeight: "500",
    },
    dollerText: {
        color: "#090c0d",
        fontWeight: "bold",
        fontSize: 26,
        paddingTop: 5
    },
    coinId: {
        paddingTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    coinImage: {
        width: 30,
        height: 30,
        borderColor: "#ddd",
        borderRadius: 15,
        borderWidth: 0.5
    }
})
export default Portifolio;