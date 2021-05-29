import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SettingsAccount = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.accountTextStyle}>Account</Text>
            <View style={styles.columView}>
            <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Account Number</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Limits and features</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Native currency</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Country</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Privacy</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Phone numbers</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>
                <View style={styles.accountView}>
                    <Text style={styles.textStyle}>Notifications settings</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />

                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    accountTextStyle: {
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 20
    },
    columView: {
        flexDirection: "column",
        paddingTop: 20
    },
    accountView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    textStyle: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.5,
        marginBottom: 20
    }
})
export default SettingsAccount;