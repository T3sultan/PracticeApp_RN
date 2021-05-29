import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios'

const Price = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("null");
    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/')
            .then(function (response) {
                setData(response.data);
                console.log("Data is ", data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    const listTab = [
        {
            status: "All Assets"
        },
        {
            status: "Winners"
        },
        {
            status: "Losers"
        }
    ];
    const setStatusFilter = (status) => {
        setStatus(status)

    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <Text style={styles.textStyle}>In the past 24 hours</Text>
                        <View style={styles.container3}>
                            <Text style={styles.marketText}>Market is down 70%</Text>
                            <View style={styles.container4}>
                                <Image
                                    style={{ height: 25, width: 25 }}
                                    source={require("../../../assets/images/search.png")}
                                />

                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <View style={styles.listTab}>
                            {listTab.map((e) => (
                                <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                    onPress={() => setStatusFilter(e.status)}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{e.status}</Text>

                                </TouchableOpacity>
                            ))}

                        </View>
                    </View>
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
        paddingHorizontal: 20,
        backgroundColor: "white"
    },
    container1: {
        paddingHorizontal: 5,
        paddingTop: 10,
        marginBottom: 70
    },
    container2: {
        paddingTop: 50
    },
    textStyle: {
        fontWeight: "500",
        fontSize: 16,
        color: "#5d616d"
    },
    container3: {
        paddingTop: 8,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    marketText: {
        fontSize: 28,
        fontWeight: "bold"
    },
    container4: {
        width: 35,
        height: 35,
        borderColor: "#ddd",
        borderRadius: 20,
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    listTab: {
        backgroundColor: "white",
        flexDirection: 'row'
    },
    btnTab: {
        width: Dimensions.get("window").width / 4,
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",
        borderRadius: 10

    },
    btnTabActive: {
        backgroundColor: "#f3f7"
    },
    coinId: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    coinImage: {
        width: 30,
        height: 30,
        borderColor: "#ddd",
        borderRadius: 10,
        borderWidth: 0.5
    },

})
export default Price;