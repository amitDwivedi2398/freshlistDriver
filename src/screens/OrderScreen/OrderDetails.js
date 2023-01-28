import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight } from '../../../ScreenDimension';


const OrderDetails = ({navigation}) => {
    const [chackBoxValue, setchackBoxValue] = useState(false);
    const [selectStatus, setSelectStatus] = useState('pending');
    const [status] = useState(
        [
            'pending',
            'delivered',
            'cancelled',
        ]
    )
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
                    <Text style={styles.rName}>Hub Name</Text>
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
                    <Text style={{color:'#9E9FA4',marginLeft:15}}>Status</Text>
                    <Picker
                    style={{margin:0}}
                    selectedValue={selectStatus}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectStatus(itemValue);}}
                     >
                        {
                            status.map((item)=>(
                                <Picker.Item label={item} value={item} key={item} />
                            ))
                        }
                     </Picker>
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
                {/* <View>
                    <Text style={{color:'#9E9FA4'}}>Order Payer</Text>
                    <Text style={[styles.lorem,{fontWeight:'800'}]}>Receiver</Text>
                </View> */}
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity  >
                  <Text style={{color:'#9E9FA4'}}>Vendor</Text>
                    <Text style={styles.lorem}>Walker, Goyrtte and Kozey</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('Location Screen')} >
                  <Image source={require('../../assets/images/greenIndicator.png')} style={{width:50,height:60}} />
                  </TouchableOpacity>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Vendor Addresh</Text>
                    <View>
                    <Text style={styles.lorem}>Kondapur,Telangana, india</Text>                    
                    </View>
                </View>
                <View>
                    <Text style={{color:'#9E9FA4'}}>Customer</Text>
                    <View>
                    <Text style={styles.lorem}>Client Account</Text>
                    
                    </View>
                </View>
                <View>
                <Text style={[styles.lorem,{fontWeight:'600'}]}>Package Details</Text>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Package Type</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'800'}]}>Documents</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <CheckBox 
                    containerStyle={{marginLeft:0,width:'100%',backgroundColor:'transparent'}}
                    title={'Width'}
                    checked={chackBoxValue}
                    checkedColor="#333"
                    uncheckedColor="#333"
                    onPress={() => {
                        setchackBoxValue(!chackBoxValue);
                    }}
                />
                </View>
                <Text style={[styles.lorem,{fontWeight:'500'}]}>0cm</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <CheckBox 
                    containerStyle={{marginLeft:0,width:'100%',backgroundColor:'transparent'}}
                    title={'Length'}
                    checked={chackBoxValue}
                    checkedColor="#333"
                    uncheckedColor="#333"
                    onPress={() => {
                        setchackBoxValue(!chackBoxValue);
                    }}
                />
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>0cm</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <CheckBox 
                    containerStyle={{marginLeft:0,width:'100%',backgroundColor:'transparent'}}
                    title={'Height'}
                    checked={chackBoxValue}
                    checkedColor="#333"
                    uncheckedColor="#333"
                    onPress={() => {
                        setchackBoxValue(!chackBoxValue);
                    }}
                />
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>0cm</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <CheckBox 
                    containerStyle={{marginLeft:0,width:'100%',backgroundColor:'transparent',}}
                    title={'weight'}
                    checked={chackBoxValue}
                    checkedColor="#333"
                    uncheckedColor="#333"
                    onPress={() => {
                        setchackBoxValue(!chackBoxValue);
                    }}
                />
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>0cm</Text>
                </View>
                </View>
                <View style={styles.noteSection}>
                    <Text style={{color:'#333'}}>
                    <Text style={{color:'red',fontSize:15,fontWeight:'600'}}>Note: </Text>
                    lrrespective of order selected payment method,you are required to collect 
                    delivery fee from customer. Thank you</Text>
                </View>
                <View style={{marginVertical:10}}>
                <Text style={[styles.lorem,{fontWeight:'600'}]}>Order Summary</Text>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Subtotal</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>0.00</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Discount</Text>
                </View>
                <Text style={[styles.lorem,{fontWeight:'500'}]}>-0 ₹ 0.00</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Delivery Fee</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>-0 ₹ 0.00</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Tax (0.0)</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>-0 ₹ 0.00</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Driver Tip</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>-0 ₹ 0.00</Text>
                </View>
                <View style={styles.orderIdSection}>
                <View>
                <Text style={{color:'#9E9FA4',fontWeight:'600',fontSize:16}}>Total Amount</Text>
                </View>
                    <Text style={[styles.lorem,{fontWeight:'500'}]}>-0 ₹ 0.00</Text>
                </View>
                </View>
            </ScrollView>
        </LinearGradient>
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
        borderColor:'#333',
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
    },
    noteSection:{
        borderWidth:1,
        borderColor:'#333',
        borderRadius:10,
        marginVertical:10,
        padding:10,
    }
})

export default OrderDetails;
