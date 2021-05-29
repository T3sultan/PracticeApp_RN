import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import SettingsAccount from './SettingsAccount';
import SettingsSecurity from './SettingsSecurity';

const Setting = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                    <View>
                        <Text style={styles.gmailText}>tipusultancse101@gmailcom</Text>
                        <Text style={styles.nameText}>Tipu Sultan</Text>
                    </View>
                    <View style={styles.roundView}>
                        <View style={styles.viewStyle}>
                            <Text style={{ flexWrap: 'wrap', fontSize: 14, fontWeight: '300', letterSpacing: 0.5 }}>
                                Share your love for crypt and get
                              {'\n'}
                                $20 of free bitcoin
                          </Text>
                            <View style={{ flex: 0.5 }}>
                                <Image
                                    style={{ height: 75, width: 75, marginLeft: 30 }}
                                    source={require('../../../assets/images/coinbox.png')}
                                />
                            </View>

                        </View>

                    </View>
                    <View style={{ paddingTop: 15 }}>
                        <SettingsAccount />

                    </View>
                    <View style={{ paddingTop: 0 }}>
                        <SettingsSecurity />

                    </View>

                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    gmailText: {
        color: "#5d616f",
        fontWeight: "500",
        fontSize: 16
    },
    nameText: {
        color: "#090c0d",
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 5
    },
    roundView: {
        height: 100,
        width: "auto",
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#ddd",
        marginTop: 30,
        overflow: "hidden"
    },
    viewStyle: {
        paddingTop: 20,
        paddingHorizontal: 13,
        flexDirection: "row",
        alignItems: "center",
        flex: 0.6
    }
})
export default Setting;