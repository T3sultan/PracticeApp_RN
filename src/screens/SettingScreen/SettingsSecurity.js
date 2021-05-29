import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert,TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const SettingsSecurity = (props) => {
    const [face, setFace] = useState("null");
    const [privacy, setPrivacy] = useState("null");
    const { onPress, title = 'Sign out' } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.accountTextStyle}>Security</Text>
            <View style={{ flexDirection: "column", paddingTop: 20 }}>
                <View style={styles.toggleStyle}>
                    <Text style={styles.textStyle}>Face ID or Requir Password</Text>
                    <ToggleSwitch
                        isOn={face}
                        onColor="#2150f5"
                        offColor="#ddd"
                        size="medium"
                        onToggle={(isOn) => {
                            if (!face) {
                                setFace(true)
                            }
                            else {
                                setFace(false)
                            }

                        }}
                    />
                </View>
                <View style={styles.toggleStyle}>
                    <Text style={styles.textStyle}>Password or Face ID Settings</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />


                </View>
                <View style={styles.toggleStyle}>
                    <Text style={styles.textStyle}>Privacy mode</Text>
                    <ToggleSwitch
                        isOn={privacy}
                        onColor="#2150f5"
                        offColor="#ddd"
                        size="medium"
                        onToggle={(isOn) => {
                            if (!privacy) {
                                setPrivacy(true)
                            }
                            else {
                                setPrivacy(false)
                            }

                        }}
                    />
                </View>
                <View style={styles.toggleStyle}>
                    <Text style={styles.textStyle}>Support</Text>
                    <Image
                        style={{ height: 12, width: 12 }}
                        source={require('../../../assets/images/arrow.png')}
                    />


                </View>
                <TouchableOpacity style={styles.button} onPress={onPress}>

                    <Text style={styles.text}>{title}</Text>


                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginBottom: 90,



    },
    accountTextStyle: {
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 20
    },
    toggleStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        //marginBottom: 10,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0.5,
        paddingTop: 20,


    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'cyan',
        marginTop:18

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})
export default SettingsSecurity;