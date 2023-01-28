import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SpleshScreen from './src/screens/SpleshScreen';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import Home from './src/screens/HomeScreen/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Setting from './src/screens/SettingScreen/Setting';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import OrderDetails from './src/screens/OrderScreen/OrderDetails';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import Try from './src/screens/Try';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import ChooseLocation from './src/components/ChooseLocation';
import LocationScreen from './src/screens/LocationScreen/LocationScreen';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Assigned" component={Home} 
         options={{
          tabBarIcon: ({color, size,focused}) => (
            <Ionicons name="logo-rss" color={focused ? '#C71FF7' : color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Order" component={OrderScreen} 
         options={{
          tabBarIcon: ({color, size,focused}) => (
            <Feather name="shopping-bag" color={focused ? '#C71FF7' : color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Setting" component={Setting}  
        options={{
          tabBarIcon: ({color, size,focused}) => (
            <Ionicons name="menu" color={focused ? '#C71FF7' : color} size={size} />
          ),
        }} />
      </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const StackTab = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Splesh" component={SpleshScreen} options={{headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false }}/>
      <Stack.Screen name="Home" component={TabScreen} options={{headerShown: false }}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="try" component={Try} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      <Stack.Screen name="Location Screen" component={LocationScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <StackTab />
      </Provider>
    </NavigationContainer>
  );
}