import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Portifolio =()=>{
    return(
        <View style={styles.container}>
            <Text>Portifolio</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Portifolio;