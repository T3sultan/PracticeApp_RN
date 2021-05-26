import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import HomeRewards from './HomeRewards';
import HomeTopM from './HomeTopM';
import HomeWatchList from './HomeWatchList';

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <View>
                    <View style={styles.imageView}>
                        <Image style={{ height: 300, width: 300 }}
                            source={require('../../../assets/images/undraw_wallet_aym5.png')}
                        />
                        <Text style={styles.textstyle}>Welcome to coinbase</Text>
                        <Text style={styles.textstyle2}>Make your first investment today</Text>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.appbuttonContainer}>
                                <Text style={styles.textaccount}>Cash Account</Text>

                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ paddingTop: 20, paddingHorizontal: 0 }}>
                        <HomeWatchList />

                    </View>
                    <View style={{paddingTop:20,paddingHorizontal:20}}>
                        <HomeTopM />

                    </View>
                    <View style={{paddingTop:20,paddingHorizontal:20}}>
                        <HomeRewards />
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "white",
        marginBottom: 45

    },
    scrollview: {
        flex: 1
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5

    },
    textstyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        paddingTop: 1,

    },
    textstyle2: {
        color: "#5d616d",
        fontSize: 11,
        fontWeight: "400",

    },
    bottom: {
        paddingTop: 20

    },
    appbuttonContainer: {
        backgroundColor: "cyan",
        borderRadius: 8,
        paddingVertical: 13,
        paddingHorizontal: 110,
    },
    textaccount: {
        fontSize: 16,
        color: "#000",
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default Home;