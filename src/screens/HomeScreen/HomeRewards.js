import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const HomeRewards = () => {
    return (
        <View>
            <View>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black", paddingTop: 15 }}>Rewards</Text>
            </View>
            <View style={{ paddingTop: 15 }}>
                <LinearGradient colors={['#6c13d7', '#6c13d7']} style={{ borderRadius: 15 }}>
                    <View style={styles.container}>
                        <Text style={styles.bitcoinText}>Discover ways to earn coin</Text>
                        <Text style={styles.earningText}>Start Earning</Text>
                        <Image
                        source={require("../../../assets/images/medal.jpeg")}
                        resizeMode="contain"
                            style={{height:150,
                            width:300}}
                        />

                    </View>

                </LinearGradient>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 190,
        width: 190,
        borderRadius: 10,
        paddingTop: 15,
        paddingLeft: 15
    },
    bitcoinText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "400"
    },
    earningText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 17,
        paddingTop: 10
    }
})
export default HomeRewards;