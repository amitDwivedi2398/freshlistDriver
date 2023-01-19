import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight } from '../../../ScreenDimension';

const OrderDetails = () => {
    return (
        <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#ffffcc', '#ccffff', '#ffffcc']}
            style={styles.container}>
            <ScrollView style={{padding:10}}>
                <View style={styles.orderIdSection} >
                    <View>
                    <Text style={styles.orderTxtStyle}>code</Text>
                    <Text style={styles.orderTxtStyle}>#8962344312</Text>
                    </View>
                    <Text style={styles.orderTxtStyle}>₹ 5.52</Text>
                </View>
                <View style={styles.daitlsSection}>
                    <Text style={{color:'#9E9FA4'}} >Pickup Location</Text>
                    <Text style={styles.nameStyle}>Dewas</Text>
                    <Text style={styles.addresh}>ujjain rode,itawa dewas - 455001 madhya pradesh</Text>
                    <Text style={styles.rName}>Recipient Name</Text>
                    <Text style={styles.lorem}>Lorem input</Text>
                    <Text>Note</Text>

                </View>
                <View style={styles.daitlsSection}>
                    <Text style={{color:'#9E9FA4'}} >Stop 1</Text>
                    <Text style={styles.nameStyle}>Dewas</Text>
                    <Text style={styles.addresh}>ujjain rode,itawa dewas - 455001 madhya pradesh</Text>
                    <Text style={styles.rName}>Recipient Name</Text>
                    <Text style={styles.lorem}>Lorem input</Text>
                    <Text>Note</Text>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Status</Text>
                    <Text style={styles.lorem}>Delivered</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{color:'#9E9FA4'}}>Payment Method</Text>
                    <Text style={styles.lorem}>Delivered</Text>
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{color:'#9E9FA4'}}>Payment Status</Text>
                    <Text style={styles.lorem}>Successful</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Order Payer</Text>
                    <Text style={[styles.lorem,{fontWeight:'800'}]}>Receiver</Text>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Vendor</Text>
                    <Text style={styles.lorem}>Walker, Goyrtte and Kozey</Text>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Vendor Addresh</Text>
                    <View>
                    <Text style={styles.lorem}>Kondapur,Telangana, india</Text>
                    
                    </View>
                </View>
            </ScrollView>
        </LinearGradient
        >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    orderIdSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    orderTxtStyle:{
        fontSize:16,
        color:'#333',
        fontWeight:'500'
    },
    daitlsSection:{
        borderWidth:1,
        borderColor:'blue',
        borderRadius:10,
        padding:10,
        marginVertical:responsiveHeight(1)
    },
    nameStyle:{
        fontSize:17,
        fontWeight:'700',
        color:'#333'
    },
    addresh:{
        fontSize:17,
        color:'#87888D'
    },
    rName:{
        color:'#87888D',
        marginBottom:5
    },
    lorem:{
        fontSize:18,
        color:'#333',
        marginBottom:5
    }
})

export default OrderDetails;
